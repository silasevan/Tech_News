import React from "react";

function Lists({ list, onRemoveItem }) {
  return (
    <div>
      <ul>
        {list.map((item) => (
          <Items key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
        ))}
      </ul>
    </div>
  );
}

export default Lists;

const Items = ({ item, onRemoveItem }) => (
  <li className="list-items">
    <span>
      <a href={item.url}>{item.title}</a>
    </span>

    <span><small>posted by: {item.author}</small></span>
    <span>
      <small>created at : {item.created_at}</small>
    </span>
    {item.num_comments}
    <span>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
    
  </li>

);
