cat ~/.cache/wal/sequences
#export LC_ALL=pt_BR.uft8
# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=10000
SAVEHIST=10000
setopt appendhistory extendedglob nomatch
#bindkey -e
# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall

zstyle ':completion:*' completer _list _oldlist _expand _complete _ignored _match _correct _approximate _prefix
zstyle ':completion:*' list-colors ''
zstyle ':completion:*' list-prompt %SAt %p: Hit TAB for more, or the character to insert%s
zstyle ':completion:*' menu select=1
zstyle ':completion:*' select-prompt %SScrolling active: current selection at %p%s
zstyle :compinstall filename '$HOME/.zshrc'

autoload -Uz compinit
compinit
autoload -Uz promptinit
autoload -Uz colors && colors
alias ls='ls --color=auto'
promptinit
prompt redhat
# End of lines added by compinstall
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
#source /home/nowayrlz/scripts/fast-syntax-highlighting/fast-syntax-highlighting.plugin.zsh
eval $(dircolors -b $HOME/.dircolors)
#alias startx='startx &> .logStartx.log'

