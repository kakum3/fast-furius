import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Servicelist from "../component/servicelist";

export const Details = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container card m-auto bg-transparent text-white border-0">
      <div className="row py-3 ">
        <div className="col-sm-12 col-lg-6 ">
          <h1 className="logo text-white "><span className="taller text-dark shadow-sm p-3 mb-4 bg-success rounded m-1">  Taller</span>
           <span className="nombreTaller text-success shadow-sm p-3 mb-5 bg-dark rounded">Paco</span>
          </h1>
          <ul className="mt-5">
            <li>
              <i className="fas fa-map-marker-alt"></i> Baker Street
            </li>
            <li>
              <i className="fas fa-phone"></i> (111) 111 111 111
            </li>
            <li>
              <i className="fas fa-envelope-open-text"></i> contact@website.com
            </li>
          </ul>

          <button
            type="button"
            className="btn btn-dark mt-5 text-white shadow-sm p-3 mb-5 bg-success rounded"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
          Contactar Taller
          </button>

          <div
            className="modal fade text-center text-primary"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered  ">
              <div className="modal-content">
               
                <div className="modal-body">
                  <form>
                    <div className="mb-3 mb-2 bg-transparentt">
                      <label for="recipient-name " className="col-form-label">
                       email:
                       
                      </label>
                      <input
                        type="email"
                        className="form-control "
                        id="recipient-name"
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label for="message-text" className="col-form-label">
                        Message:
                      </label>
                      <textarea
                        className="form-control "
                        id="message-text"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Send 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-5">
          <Servicelist />
        </div>
      </div>
    </div>
  );
};
