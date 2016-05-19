'use strict';

window.app

    .factory('i18n', function () {
        var _i18n = {};

        _i18n.locale = 'ru';

        _i18n.bundle = {
            'ru': {
                appTitle: 'Adelaida Database',
                search:'Искать',
                create:'Новая запись',
                edit:'Редактировать',
                save:'Сохранить',
                firstName:'Имя',
                lastName:'Отчество',
                surname:'Фамилия',
                dob:'Дата рождения',
                comments:'Комментарии'

            }
        };

        _i18n.setLocate = function(_locale){
            _i18n.locale = _locale;
        };

        _i18n.get = function(key){
            return _i18n.bundle[_i18n.locale][key];
        };

        _i18n.getAll = function(){
            return _i18n.bundle[_i18n.locale];
        };
        return _i18n;
    });

