/** @format */

export default function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <div>
        <Header course={course['name']} />
        <Content parts={course['parts']} />
        <Total exercises={course['parts']} />
      </div>
    </>
  );
}

const Header = ({ course }) => {
  console.log({ course });
  return (
    <>
      <div>
        <h1>{course}</h1>
      </div>
    </>
  );
};

const Content = ({ parts }) => {
  console.log({ parts });
  return (
    <>
      <div>
        <Part part={parts[0]['name']} exercise={parts[0]['exercises']} />
        <Part part={parts[1]['name']} exercise={parts[1]['exercises']} />
        <Part part={parts[2]['name']} exercise={parts[2]['exercises']} />
      </div>
    </>
  );
};

const Part = ({ part, exercise }) => {
  return (
    <>
      <div>
        <p>
          {part} {exercise}
        </p>
      </div>
    </>
  );
};

const Total = ({ exercises }) => {
  return (
    <>
      <div>
        <p>
          {exercises[0]['exercises'] +
            exercises[1]['exercises'] +
            exercises[2]['exercises']}
        </p>
      </div>
    </>
  );
};
