from flask import Flask, render_template
app=Flask(__name__)

@app.route('/')
@app.route('/<int:number1>')
@app.route('/<int:number1>/<int:number2>')
@app.route('/<int:number1>/<int:number2>/<string:color1>')
@app.route('/<int:number1>/<int:number2>/<string:color1>/<string:color2>')
def funcion(number1=8, number2=8, color1='lightblue', color2='blue'):
    return render_template("index.html", num1=number1, num2=number2, clr1=color1, clr2=color2)

if __name__=="__main__":
    app.run(debug=True)