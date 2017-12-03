# Git Commands

* git init - Create a new git repo.
* git status - View the changes to your project code.
* git add - Add files to staging area.
* git commit - Creates a new commit with files from staging area.
* git log - View recent commits.

# SSH keys
* ls -a ~/.ssh - Search for ssh keys on the machine.
* ssh-keygen -t rsa -b 4096 -C "snirdahan01@gmail.com" - Generates ssh key.
* eval "$(ssh-agent -s)" - Check if ssh agent is running.
* ssh-add ~/.ssh/id_rsa - Add ssh key.
* pbcopy < ~/.ssh/id_rsa.pub - Copy the rsa_pub file to the clipboard.
* ssh -T git@github.com - Make ssh connection to github.
* git remote add origin + ssh url from github - Add origin remotly.
* git remote - Show the branches.
* git push -u origin master - The first push to github.