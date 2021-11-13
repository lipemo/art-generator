import React, {useState} from "react";
import dafitiFeatImg from '../assets/dafitiFeat.png';

const FeatBF: React.FC<any> = React.forwardRef((props, ref:any) => {
  const [fullname, setFullname]:any = useState('');
  const [img, setImg]:any = useState(null);
  
  return(
    <>
      <section ref={ref} className="sArt">
    { !props.isSaving ? 
    <form>
      <textarea required onChange={(event:any) => { setFullname(event.target.value);}}></textarea>
      <input required placeholder="image" type="file" onChange={(event:any) => {setImg(()=> URL.createObjectURL(event.target.files[0]));}}/>
      <div className="dashedAvatar"></div>
      <div className="nameTip">Digite o seu nome</div>
      <div className="avatarTip">Escolha sua imagem</div>
    </form> : ''
  }
        <img className="avatar" src={img} alt="Avatar"/>
        <div>{props.fullname}</div>
        <div className="fullName">{fullname}</div>
        <img src={dafitiFeatImg} alt="Dafiti Black Friday" className="art" />
      </section>
    </>
  ) ;
});

export default FeatBF;