import React from 'react'

function Modal() {
    return (
        <>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" >
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add project details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="input-group input-group-sm mb-3" >
                                <span class="input-group-text" id="inputGroup-sizing-sm">Bedrooms</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='eg:4' style={{ marginRight: '4px' }} />
                                <span class="input-group-text" id="inputGroup-sizing-sm">Washrooms</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='eg:5' style={{ marginRight: '4px' }} />
                                <span class="input-group-text" id="inputGroup-sizing-sm">Area</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='10,0000 sq/km' style={{ marginRight: '4px' }} />
                                <span class="input-group-text" id="inputGroup-sizing-sm">Price</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='50,000 Rs' style={{ marginRight: '4px' }} />
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height:'100px'}}></textarea>
                                <label for="floatingTextarea" style={{fontSize:'13px'}}>Project description</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
