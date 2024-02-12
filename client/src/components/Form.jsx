import { FaRandom } from 'react-icons/fa';
import { getRandomPrompt } from '../utils';
import { useState } from 'react';

const Form = ({ generateImage }) => {
    const [prompt, setPrompt] = useState('')

    const handleRandomPrompt = () => {
        const randomPrompt = getRandomPrompt();
        setPrompt(randomPrompt)
    }

    return (
        <div className="form-section">
            <div className="container-title">
                <h1 className="title">Yapay Zeka Tabanlı Resim Oluşturma Motoru</h1>
               
            </div>
            <div className="form-container">
                <div className="input-div">
                    <label>İçerik</label>
                    <span>İçeriği girin ve yapay zeka ile oluşturulan fotoğrafın tadını çıkartın(İngilizce içerik girilmesi tavsiye edilir..) </span>
                    <div className="input-cont">
                        <textarea name="prompt" id="" cols="30" rows="4" value={prompt} onChange={(e) => setPrompt(e.target.value)} className="form-control" placeholder="A black horse walking around  the lake"></textarea>
                        <FaRandom onClick={handleRandomPrompt} className='random-icon' />
                    </div>
                </div>
                <button className='btn' onClick={() => generateImage(prompt, setPrompt)}>Resim Oluştur</button>
            </div>
        </div >
    )
}


export default Form