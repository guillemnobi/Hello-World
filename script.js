const hello = React.createElement(
  'h1', // type
  {
    className: 'title',
    onClick: () => {alert('clicked');},
    style: { fontFamily: 'sans-serif', color: 'rgb(255, 100, 100)'}
  }, // props
  'Hello World!' // children
);

const goodbye = React.createElement(
  'h2', // type
  {
    className: 'title2',
    onClick: (e) => {console.log("clicked")},
    style: { fontFamily: 'sans-serif', color: 'rgb(0, 0, 0)'}
  }, // props
  'GoodBye World!' // children
);

const clicked = React.createElement(
  'button', // type
  {
    className: 'button',
    onClick: (e) => {console.log("you clicked a button")},
  }, // props
  'Click Me' // children
);

ReactDOM.render(
  hello,
  document.getElementById('root')
);
ReactDOM.render(
  goodbye,
  document.getElementById('root2')
);
ReactDOM.render(
  clicked,
  document.getElementById('button')
);
ReactDOM.render(
  clicked,
  document.getElementById('button2')
);
ReactDOM.render(
  clicked,
  document.getElementById('button3')
);
