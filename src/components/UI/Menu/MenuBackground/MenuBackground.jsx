import React from "react"
import ContentLoader from "react-content-loader"

const MenuBackground = (props) => (
  <ContentLoader 
    speed={2}
    width={250}
    height={590}
    viewBox="0 0 250 590"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="6" rx="0" ry="0" width="250" height="590" />
  </ContentLoader>
)

export default MenuBackground