import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addInput} from "../../actions/inputActions";
import "./input-from.css";

const InputForm = ({error, addInput}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");

  const clearInputFields = () => {
    setPrice("");
    setName("");
    setContent("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addInput(name, price, content);
    clearInputFields();
  };

  if (error !== null) {
    return <p className="error">{error.message}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Вид ремонта</label>
      <input
        className="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
      <label>Цена</label>
      <input
        className="price-input"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label>Описание</label>
      <input
        className="content-input"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="save-btn">
        Save
      </button>
    </form>
  );
};

InputForm.propTypes = {
  editItem: PropTypes.object.isRequired,
  editInput: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  editMode: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  editItem: state.inputs.editItem,
  error: state.inputs.error,
  loading: state.inputs.loading,
  editMode: state.inputs.editMode,
});

export default connect(mapStateToProps, {addInput})(InputForm);
