import React from "react";
import { TimelineLite } from "gsap";

class Slide extends React.Component {

  componentDidMount() {
    this.anime();
  }
  componentDidUpdate() {
    this.anime();
  }

  anime = () => {
    let tl = new TimelineLite();
    const title = this.refs.title;
    const description = this.refs.desc;

    tl.from(title, 0.7, {
      x: 0,
      y: -500
    });
    tl.from(description, 0.7, {
      x: 0,
      y: 500
    });
    tl.from(title, 0.2, {
      scale: 1
    });
    tl.from(title, 3, {
      scale: 1
    });
    tl.eventCallback("onComplete", this.props.next);
  };

  render() {
    const { title, description, url } = this.props;
    const styles = {
      backgroundImage: `linear-gradient( rgba(0,0,0,0.3), rgba(0, 0, 0, 0.3) ), url(${url})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      transition: 'backgroundImage 1s ease-in-out'
    };
    return (
      <div className="slide" style={styles}>
        <div className="title">
          <h2 ref="title">{title}</h2>
        </div>
        <span className="description" ref="desc">
          {description}
        </span>
      </div>
    );
  }
}

export default Slide;
