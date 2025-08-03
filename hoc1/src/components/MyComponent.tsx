interface MyComponentProps {
  data: string
}

const MyComponent = ({ data }: MyComponentProps) => {
  return <div>{data}</div>
}

export default MyComponent
