function tableau (num){
    const liste =num.map((number) =>
        React.createElement('tr',null,React.createElement('td',{className:'num'},number),React.createElement('td',{className:'FizzBuzz'},this.fizzbuzz(number)))
     );
     return React.createElement('table', null,React.createElement('thead', null,React.createElement('tr', null,React.createElement('th', {colSpan:"2"},'Resultat'))),
            React.createElement('tbody', null,liste));
}

class hautPage extends React.Component{
    render(){
        const img = React.createElement('img',{src:'data:image/png;base64,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'})
        const title = React.createElement('h1', {}, img,'FizzBuzz');
        const span = React.createElement('h2', {}, 'Bienvenue sur l\'algorithme de FizzBuzz' );
        const input = React.createElement('form',{ method :"post"},
                            React.createElement('label', {id :"labelTxt"},"Veuillez inserer le fichier .txt : "),
                            React.createElement('input', { type :"file", id :"fichierTXT", accept:".txt"}));
                        
        return React.createElement('div', { id: "hautPage" },title,span,input );
    }
}

ReactDOM.render(React.createElement(hautPage,{}), document.querySelector('#react'));

function fizzbuzz(num){
    if(num%3==0 && num%5==0){
        return 'FizzBuzz';
    }else{
        if(num%3==0 ){
            return 'Fizz';
        }else{
            if(num%5==0){
                return 'Buzz';
            }else{
                return '';
            }
        }
    }
}

document.getElementById('fichierTXT').onchange = function(){
        var file = this.files[0];
        var reader = new FileReader();
        var num=[];
        reader.onload = function(progressEvent){   
          var fileContentArray = this.result.split(/\r\n|\n/);
          for(var line = 0; line < fileContentArray.length; line++){
              num[line]=fileContentArray[line];
          }
          ReactDOM.render(React.createElement('div',{id:'ensemble'},React.createElement(hautPage,{}),tableau(num)),document.querySelector('#react'));
        };
        reader.readAsText(file);
    };