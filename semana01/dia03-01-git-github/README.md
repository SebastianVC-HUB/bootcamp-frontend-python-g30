# Bootcamp Frontend G30

Este repositorio nos sirve para aprender el flujo de trabajo de GIT y Github.

### Comando de configuración:

* git config --global user.name "sebastianVC-HUB"
* git config --global user.email "sebastian.vc.0820@gmail.com"

### Comandos básicos:

* git init

* git status: Para ver el estado de nuestro repositorio.

* git add . : Agrega los cambios sobre el directorio donde se encuentra y nunca fuera de el.
* git add -A : Si estamos en una carpeta interna pero tenemos cambios en otras carpetas podemos ejecutar este comando.
* git add index.html : Este es para guardar los cambios de un archivo especifico.

* git commit -m "Subir archivos de la primera semana"
* git commit -m "Mi primera página"

* git log
* git log --oneline
* git log --oneline --graph

* git show

* git remote add origin https://...
* git remote remove origin

* git branch -M main : Comando para renombrar la rama.

* git push -u origin main : Solo se usa la primera vez.
* git push origin main : Cuando ya tenemos ciertos commits desde la rama main vamos a subir a origin.
* git push : Aquí se plantea que lo haría directamente a la rama main siempre y cuando hallamos presionado el comando del incio.

* git pull origin main
* git pull

* git checkout ejemplo
* git checkout -b ejemplos

* git switch -C ejemplo2
* git switch ejemplo2

* git merge ejemplo2