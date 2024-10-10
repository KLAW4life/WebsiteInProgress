from flask import Flask, request, render_template, redirect, url_for, flash


Portfolio = Flask(__name__)


if __name__ == '__main__':
    Portfolio.run(debug=True)