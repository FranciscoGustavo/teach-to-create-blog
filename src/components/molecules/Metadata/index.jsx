import { BiImageAdd } from 'react-icons/bi';
import { CSSMetadata, CSSInputCover, CSSInput, CSSButton } from './styles';

const Metadata = ({ onHandleChange, data, isOpen, close }) => {
  if (!isOpen) return null;

  return (
    <CSSMetadata>
      <div>
        <CSSInputCover>
          <label htmlFor="cover">Cover Photo</label>
          <div onDropCapture={() => console.log('Soltar')}>
            <img src={data.cover} alt=""/>
            <BiImageAdd/>
            <p>
              <input type="file" id="cover" name="cover" onChange={onHandleChange} />
              Subir imagen ó arrastrar y soltar
            </p>
            <p>PNG, JPG, GIF menor a 2MB</p>
          </div>
        </CSSInputCover>
        <CSSInput>
          <p>Title</p>
          <div>
            <input type="text" name="title" onChange={onHandleChange} value={data.title} />
          </div>
        </CSSInput>
        <CSSInput>
          <p>Url</p>
          <div>
            <span>https://localhost:3000/</span>
            <input type="text" name="slug" onChange={onHandleChange} value={data.slug} />
          </div>
        </CSSInput>
        <CSSInput>
          <p>Descriptión</p>
          <div>
            <textarea name="description" onChange={onHandleChange} defaultValue={data.description} />
          </div>
        </CSSInput>
        <CSSInput>
          <p>Keywords</p>
          <div>
            <input type="text" name="keywords" onChange={onHandleChange} value={data.keywords} />
          </div>
        </CSSInput>
        <div>
          <CSSButton onClick={close}>
            Aceptar
          </CSSButton>
        </div>
      </div>
    </CSSMetadata>
  );
}

export default Metadata;