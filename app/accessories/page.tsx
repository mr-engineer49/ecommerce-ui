import CardPage from "../components/card/CardPage";
import React from 'react';
import { connect } from 'react-redux';




const AccessoriesPage = ({ products, onDeleteProduct, onToggleProduct }) => {
  return (
    <ul>
      {products.map(product => (
        <CardPage key={product.id}>
        </CardPage>
      ))}
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
      <button onClick={() => onToggleTodo(todo.id)}>Toggle</button>
    </ul>
  );
};

const mapStateToProps = state => {
  return { todos: state.todos };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteTodo: id => dispatch({ type: 'DELETE_TODO', id }),
    onToggleTodo: id => dispatch({ type: 'TOGGLE_TODO', id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccessoriesPage);