import React, { useRef } from "react";

function Modal(props) {
  const title = useRef();
  const bedroom = useRef();
  const washroom = useRef();
  const area = useRef();
  const price = useRef();
  const description = useRef();

  const dataFill = () => {
    const title_ref = title.current.value;
    const bedroom_ref = bedroom.current.value;
    const washroom_ref = washroom.current.value;
    const area_ref = area.current.value;
    const price_ref = price.current.value;
    const description_ref = description.current.value;
    if (
      !title_ref ||
      !description_ref ||
      !area_ref ||
      !price_ref ||
      !bedroom_ref ||
      !washroom_ref
    ) {
      return alert("Please fill all thte fields");
    }
    return props.uploading(
      title_ref,
      bedroom_ref,
      washroom_ref,
      area_ref,
      price_ref,
      description_ref
    );
  };
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add project details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="input-group  mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Title
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="eg:Chapel Residency"
                  style={{ marginRight: "4px" }}
                  ref={title}
                />
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Bedrooms
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="eg:4"
                  style={{ marginRight: "4px" }}
                  ref={bedroom}
                />
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Washrooms
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="eg:5"
                  style={{ marginRight: "4px" }}
                  ref={washroom}
                />
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Area
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="10,0000 sq/km"
                  style={{ marginRight: "4px" }}
                  ref={area}
                />
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Price
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="50,000 Rs"
                  style={{ marginRight: "4px" }}
                  ref={price}
                />
              </div>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ height: "100px" }}
                  ref={description}
                ></textarea>
                <label for="floatingTextarea" style={{ fontSize: "13px" }}>
                  Project description
                </label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={dataFill}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
