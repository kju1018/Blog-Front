function Layout(props) {

  return (
    <div>
      {/* TODO 헤더 개발해야함 */}
      <div>header</div>
      <div> {props.children}</div>
    </div>
  )

}

export default Layout;