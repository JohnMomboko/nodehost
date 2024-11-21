# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi

# User specific environment
if ! [[ "$PATH" =~ "$HOME/.local/bin:$HOME/bin:" ]]
then
    PATH="$HOME/.local/bin:$HOME/bin:$PATH"
fi
export PATH

# Uncomment the following line if you don't like systemctl's auto-paging feature:
# export SYSTEMD_PAGER=

# User specific aliases and functions
# export PATH="/opt/alt/alt-nodejs20/root/usr/bin/:$PATH" permet de changer la version de node

export PATH="$PATH:/opt/alt/alt-nodejs20/root/usr/bin/"
export PATH="$PATH:/opt/alt/alt-nodejs18/root/usr/bin/"