const Header = (props) => <h2>{props.course}</h2>

const Content = (props) => (
  <div>
    {props.parts.map((x) => <Part key={x.id} part={x} />)}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => {
  const total = props.parts.reduce(
    (sum, part) => {
      return sum + part.exercises
    }, 0)
  return <strong>total of {total} exercises</strong>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course