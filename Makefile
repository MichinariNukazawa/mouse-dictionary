
DICT_SRC := ../lina_dicto/lina_dicto/dictionary/esperanto/dictionary_source/

.PHONY: all dictionary

all:
	make dictionary
	npm run build-firefox

dictionary:
	# dictionary data depend lina_dicto and that parent source.
	# https://github.com/MichinariNukazawa/lina_dicto
	# license: https://github.com/MichinariNukazawa/lina_dicto/blob/master/lina_dicto/dictionary/esperanto/DictionaryChanges.md
	cd $(DICT_SRC) && node conv_pejvo_dictionary_mouse-dictionary.js
	cp $(DICT_SRC)/md/* static/data/

