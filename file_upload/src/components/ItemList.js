import React from "react";
import { Link } from "react-router-dom";

function ItemList({ items, isLoading }) {
  return (
    <div align="center">
      <h2>상품 목록</h2>
      {isLoading && "로딩중..."}
      {!isLoading && items && (
        <>
          <Link to="/create">새로만들기</Link>
          <table border="1">
            <thead>
              <tr>
                <th align="center" width="80">
                  상품아이디
                </th>
                <th align="center" width="320">
                  상품명
                </th>
                <th align="center" width="100">
                  상품가격
                </th>
              </tr>
            </thead>
            <tbody>
              {!items.length && (
                <tr>
                  <td colSpan="3">
                    List is empty.
                  </td>
                </tr>
              )}
              {!!items.length && items.map((item) => (
                <tr key={item.itemId}>
                  <td align="center">{item.itemId}</td>
                  <td align="left">
                    <Link to={`/read/${item.itemId}`}>{item.itemName}</Link>
                  </td>
                  <td align="right">{item.price} 원</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default ItemList;
