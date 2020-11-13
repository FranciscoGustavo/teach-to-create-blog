import { useState, useEffect } from 'react';
import showdown from 'showdown';
import { useForm } from '../../../hooks';
import { Metadata, Editor, Modal, Alert } from '../../molecules';
import { PostsService, UploadsService } from '../../../services';
import { CSSEditorContainer,  } from './styles';

const Html = new showdown.Converter();

const middleware = (data, field) => {
  if (field === 'title') {
    data.slug = data.title.toLowerCase();
  }
  return data;
}

const file = async (files) => {
  console.log(files);
  const data = await UploadsService.image(files[0]);
  console.log(data);
  return 'default-cover.jpg';
}

const PostEditor = ({ data }) => {
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalAlert, setModalAlert] = useState({ title: '', message: '', status: '' });
  const { data: post, handleChange } = useForm(data, { middleware, file });
  const [metadataModal, setMetadataModal] = useState(false);
  const [html, setHtml] = useState(Html.makeHtml(post.body));
  
  useEffect(() => {
    setHtml(Html.makeHtml(post.body));
  }, [post.body]);

  const handleClose = () => {
    setModal(false);
    setModalAlert({ title: '', message: '' });
  }
  const handleSaving = (title, message, status) => {
    setModalAlert({ title, message, status });
    setModal(true);
  }
  let hasTimeOut;
  const handleSave = () => {
    setDisabledButtons(true);
    handleSaving('Guardando...', 'El post se esta guardando', );
    const idOrSlug = post.id ? post.slug : post.id;
    return PostsService.save(post, idOrSlug)
      .then((id) => {
        const e = { target: { name: 'id', value: id } };
        handleChange(e);
        setDisabledButtons(false);
        handleSaving('Guardado', 'El post se guardado con exito', 'success');
        setTimeout(handleClose,3000);
      })
      .catch((err) => {
        console.log('ERROR', err);
      });
  }

  const handlePublic = () => {
    handleSaving('Guardando...', 'El post se esta guardando', );
    handleSave().then(() => {
      PostsService.publish({ isPublic: !post.isPublic }, post.slug)
        .then(() => {
          const e = { target: { name: 'isPublic', value: !post.isPublic } };
          handleChange(e);
          handleSaving('Guardado', 'El post se guardado con exito', 'success');
          setTimeout(handleClose,3000);
        })
        .catch((err) => {
          console.log('ERROR', err);
        });
    })
  }

  const handleOpenMetadata = () => setMetadataModal(true);
  const handleCloseMetadata = () => setMetadataModal(false);

  return (
    <CSSEditorContainer>
      <Editor
        data={post}
        html={html}
        onHandleChange={handleChange}
        onSave={handleSave}
        onPublic={handlePublic}
        onMetadata={handleOpenMetadata}
        disabled={disabledButtons}
      />
      <Metadata
        data={post}
        onHandleChange={handleChange}
        isOpen={metadataModal} 
        close={handleCloseMetadata}
      />
      <Modal isModalOpen={modal}>
        <Alert
          title={modalAlert.title}
          message={modalAlert.message}
          status={modalAlert.status}
          onClose={handleClose}
        />
      </Modal>
    </CSSEditorContainer>
  );
}

export default PostEditor;