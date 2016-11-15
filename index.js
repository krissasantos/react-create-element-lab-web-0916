//Code React element here



    const awesome_person = React.createElement('h1',{},'An Awesome Person')
    const learning_react = React.createElement('p',{},'Who is learning React')
    const ul = React.createElement('ul', { className: 'me_interests'},
        [ React.createElement('li', {}, 'JavaScript'),
          React.createElement('li', {}, 'React'),
          React.createElement('li', {}, 'Movies'),
          React.createElement('li', {}, 'Ice cream')
        ]
    )
const meInReact = React.createElement('div', {className: 'me'}, [awesome_person, learning_react, ul])
ReactDOM.render(meInReact, document.getElementById('main'));
