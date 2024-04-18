import React, { useEffect, useState } from 'react'
import Modal from "../Modal/Modal"
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Innerproject() {
    const [queryParameters] = useSearchParams();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isData, setIsData] = useState(false)
    const [stat, setStat] = useState(true)
    const id = queryParameters.get("id");
    useEffect(() => {
        async function Call() {
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/project?id=${id}`
                );
                setTitle(data.title)
                setDescription(data.description)
                setImages(data.pic)
                setIsData(true)
                setIsLoading(false)
                setStat(prev => !prev)
            } catch (err) {
                setIsData(false)
                setIsLoading(false)
                setStat(prev => !prev)
                alert(err);
            }
        }
        Call();
        return () => { };
    }, [id]);
    const data = isData && !isLoading &&
        <div key={stat}>
            <div className="col-md-10 mx-auto mt-5 innerbox ">
                <h2 className=''>{title}</h2>
                <div className="line"></div>
            </div>
            <h2 className='text-center mt-5'>About Our Project</h2>
            <div className="col-md-10 mx-auto inneritems">
                <div className="col-md-6 cola">

                    <h5>
                        {description}
                    </h5>
                    <button className='mt-3'

                        style={{ width: '150px', height: '35px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}
                        id="rembtn"
                    >
                        Enquire Now!
                    </button>
                </div>

                <div className="col-md-6 colb">
                    Embeding video!!!//Picture
                </div>
            </div>
            <h2 className='text-center im'>IMAGES TOUR</h2>
            <div className="col-md-10 mx-auto innerimages mt-4">
                {images?.map((img, ind) => {
                    return <div className="inimage" data-bs-toggle="modal" data-bs-target="#exampleModal" key={ind}>
                        <img src={`${process.env.REACT_APP_DEVELOPMENT_URL}/images/${img}`} alt={title} />
                    </div>
                })}
            </div>
        </div>
    return (
        <>
            <div className="inner">
                {isLoading ? <p>Data is Loading</p> : isData && data}
            </div >
            {images.length >= 1 && <Modal data={images} title={title}/>}
        </>
    )
}

export default Innerproject
