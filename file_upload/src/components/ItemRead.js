import React from "react";
import { Link } from "react-router-dom";

function ItemRead({ itemId, item, isLoading, onRemove }) {
  const pictureUrl = () => {
    return (
        `/src/assets/uploadImgs/${item.pictureUrl[0]}`
    );
  };

  return (
    <div align="center">
      <h2>상품 상세보기</h2>
      {isLoading && "로딩중..."}
      {!isLoading && item && (
        <>
          <table>
            <tbody>
              <tr>
                <td>상품번호</td>
                <td>
                  <input type="text" value={item.itemId} readOnly />
                </td>
              </tr>
              <tr>
                <td>상품명</td>
                <td>
                  <input type="text" value={item.itemName} readOnly />
                </td>
              </tr>
              <tr>
                <td>상품가격</td>
                <td>
                  <input type="text" value={item.price} readOnly />
                  &nbsp;원
                </td>
              </tr>
              <tr>
                <td>미리보기</td>
                <td>

                  <img src={ require(`../assets/uploadImgs/${item.pictureUrl[0]}`) } alt="" width="200" />
                </td>
              </tr>
              <tr>
                <td>상품설명</td>
                <td>
                  <textarea value={item.description} readOnly></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <Link to={`/edit/${itemId}`}>편집</Link>
          <button onClick={onRemove}>삭제</button>
          <Link to="/">목록</Link>
        </>
      )}
    </div>
  );
}

export default ItemRead;
