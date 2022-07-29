import React, { Fragment } from 'react';

//!Использование Фрагментов (тут впервые понадобились, so lets get it from scratch)
//*кейс: до этого всегда выводили один элемент(с н дочерними) из компонента
/*
const Component = props => {  
  return (
    <div>
      <h1>Hello</h1>
      <h2>World</h2>
    </div>
  )
}
*/
//?Но что если нам нужно еще что-то отрендерить тут же
/*
const Component = props => {  
  return (
    <div>
      <h1>Hello</h1>
      <h2>World</h2>
    </div>
    <h3>Boom</h3>
  )
}
*/
//*и ВСкод и прочие скажут - ошибка, чтобы понять почему достаточно
//*перевести этот кода в JS (React.createElement)
//?Решение - все что нужно это обернуть элементы во встроенный компонент <Fragment>
//у Create-react-app есть валидное сокращение, аналогичное по функциональности <></>

//---------------------------------------------------------------------------


//!List component

const List = (props) => {
  const peopleData = props.people;

  return (
    <Fragment>
      {peopleData.map((person) => {
        const {id,name,age,image} = person
        return (
          <article key={id} className="person">
            <img src={image} alt={name}/>
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        )
      })}
    </Fragment>
  );
};

export default List;
