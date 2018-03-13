if [[ ! $DISPLAY && $XDG_VTNR -eq 1 ]]; then
	exec startx &> .logStartX
fi

#set $TERMINAL=termite
set $TERMINAL=urxvt
export QT_X11_NO_MITSHM=1
