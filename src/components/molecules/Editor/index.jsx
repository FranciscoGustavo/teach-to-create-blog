import { BiImageAdd } from 'react-icons/bi';
import { CSSEditor, CSSMarkdown, CSSHeader, CSSHtml } from './styles';

const Editor = ({ data, html, onHandleChange, onSave, onPublic, onMetadata, disabled }) => {
  return (
    <CSSEditor>
      <CSSMarkdown>
        <CSSHeader>
          <button onClick={onSave} disabled={disabled}>Guardar</button>
          <button onClick={onPublic} disabled={disabled}>{data.isPublic ? 'Borrador' : 'Publicar'}</button>
          <button onClick={onMetadata} disabled={disabled}>Metadata</button>
        </CSSHeader>
        <textarea name="body" onChange={onHandleChange} defaultValue={data.body}/>
      </CSSMarkdown>
      <CSSHtml>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
      </CSSHtml>
    </CSSEditor>
  );
}

export default Editor;