import React from 'react';

var sectionStyle = {
    width: "100%",
    height: "800px",
    backgroundImage: "url('https://res.cloudinary.com/navupriya/image/upload/v1590858676/foodyicon/3007244_fdj5nb.jpg')"
  };
  

class BodyComponent extends React.Component
{
    constructor(props)
    {
        super(props)

    }

    render()
    {

        return (<div style={sectionStyle}>
                 </div>)


    }
}

export default BodyComponent;