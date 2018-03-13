xrdb -load ~/.Xresources & 
compton --config ~/.config/compton.conf &
wal -i "$(< "${HOME}/.cache/wal/wal")"
#feh --bg-scale ~/Documents/i3wm-themer/themes/Forest/Forest2.png &

#TERMINAL=termite
TERMINAL=urxvt
export TERMINAL
setxkbmap br
#exec i3 -shmlog-size=26214400 &
exec i3

