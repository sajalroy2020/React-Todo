import React, { useState } from "react";

export default function PopupModel(){
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
      };
      return{modal, toggleModal};
}