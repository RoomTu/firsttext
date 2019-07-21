if [ -d $1 ]; then
  # echo 'error: dir exists'
  exit 1
else
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  echo '<!DOCTYPE>' > index.html
  echo '<title>hello</title>' >> index.html
  echo '<h1>hi</h1>' >>index.html
  echo 'h1{color: red;}' > css/style.css
  echo "var string = 'hello world'" >js/main.js
  echo 'alert(string)' >> js/main.js
  echo 'success'
  exit 0
fi
