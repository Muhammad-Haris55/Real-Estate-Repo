import React, { useState } from "react";

function Modal2() {

  return (
    <>

      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        Launch demo modal
      </button> */}

      {/* <div class="modal white" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-contents1">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-bodys">


              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Example label</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Another label</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
              </div>
            
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Button trigger modal --> */}
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Write a comment!
      </button>

      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" >
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Enter Comment!</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-bodys" style={{paddingLeft:'15px',paddingRight:'15px'}}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" id="ecolor">Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="John"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" id="ecolor">Enter your comment</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="Your comment..."></textarea>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal2;
