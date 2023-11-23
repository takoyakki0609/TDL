import React, { useState } from "react";
import styled from "styled-components";
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.user);
  const [task, setTask] = useState([
    { id: shortid.generate(), title: "", content: "", isDone: false },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onContentHandler = (e) => {
    setContent(e.target.value);
  };

  const AddTaskSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: shortid.generate(),
      title,
      content,
      isDone: false,
    };
    setTask([newTask, ...task]);
  };

  const handleClickDelete = (item) => {
    const deleteTask = task.filter((todo) => {
      return item.id !== todo.id;
    });
    setTask(deleteTask);
  };

  const handleClicked = (item) => {
    const todo = task.map((todo) => {
      if (item.id === todo.id)
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      else return todo;
    });
    setTask(todo);
  };

  console.log(task);
  return (
    <Container>
      <Header>
        <h1>Todo List</h1>
      </Header>
      <AddTask onSubmit={AddTaskSubmit}>
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onTitleHandler}
        />
        <label>내용</label>
        <input
          type="text"
          name="content"
          value={content}
          onChange={onContentHandler}
        />
        <button type="submit">등록하기</button>
      </AddTask>
      <OngoingBox>
        <h2>진행중</h2>
        <Ongoing>
          {task
            .filter((item) => {
              return item.isDone === false;
            })
            .map((item) => {
              return (
                <div key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <button
                    onClick={() => {
                      handleClicked(item);
                    }}
                  >
                    완료
                  </button>
                  <button onClick={() => handleClickDelete(item)}>삭제</button>
                </div>
              );
            })}
        </Ongoing>
      </OngoingBox>
      <DoneBox>
        {task
          .filter((item) => {
            return item.isDone === true;
          })
          .map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <button
                  onClick={() => {
                    handleClicked(item);
                  }}
                >
                  되돌리기
                </button>
                <button onClick={() => handleClickDelete(item)}>삭제</button>
              </div>
            );
          })}
      </DoneBox>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddTask = styled.form``;

const OngoingBox = styled.div``;
const Ongoing = styled.div``;
const DoneBox = styled.div``;
