import React from 'react'

import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
function Table() {
    return (
        <>
            <div className="navhead container-fluid">
                <div className="title">
                    <NavLink
                        className="navbar-brand"
                        id="brandname"
                        data-aos="flip-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                        data-aos-delay="500"
                    >
                        <p>Logo</p>
                    </NavLink>
                </div>

                <a
                    class="btn btn-primary mb-2"
                    id="cbtn"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                >
                    <img src="ham.png" alt="" sizes="" srcset="" />
                </a>
            </div>
            <div className="headupload2">
                <Sidebar />
                <div className='col-md-10 col-sm-12  mx-auto pb-2 tablehead'>

                    <table class="table table-hover table-sucess mx-auto">
                        <thead>
                            <tr>
                                <th scope="col" id="tth" >#</th>
                                <th scope="col" id="tth">Name </th>
                                <th scope="col" id="tth">Email</th>
                                <th scope="col" id="tth">Comment</th>
                                <th scope="col" id="tth">Action</th>
                            </tr>
                        </thead>


                        <tbody>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore at molestiae sed neque fugit necessitatibus non iure! Mollitia doloremque provident optio est sit, saepe voluptate facere. Ab corrupti eius adipisci ex blanditiis commodi aliquam perferendis sapiente dolorem cumque velit natus aut nam, quis iusto dolor dolore! Pariatur, sint officia explicabo quos illo necessitatibus quod consequuntur soluta repellat iure. Voluptates, corporis?</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                            <tr>
                                <th scope="col" id="ttr">1</th>
                                <th scope="col" id="ttr">Hassan Khan</th>
                                <th scope="col" id="ttr">Hasaaankhan55@ gmail.com</th>
                                <th scope="col" id="ttr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta illo fuga magnam facere, ipsa sapiente eum voluptatum sit, maiores dolor nostrum neque consectetur repellat natus id libero ratione error!</th>
                                <th scope="col" id="ttr2"><span><button id='rembtn5'><img src="tick.png" alt="" /></button></span> <span><button id='rembtn4'><img src="close.png" alt="" /></button></span></th>
                            </tr>
                        </tbody>
                        {/* <thead>
                        <tr>
                            <th scope="col">1</th>
                            <td scope="col">Mark</td>
                            <td scope="col">Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </thead> */}
                    </table>

                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Table