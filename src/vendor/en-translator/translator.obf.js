const _0x27fd3b = _0x3347;
(function(_0x3442cb, _0x5b3fcf) { const _0x57e049 = _0x3347,
        _0x18dd22 = _0x3442cb(); while (!![]) { try { const _0x20cc33 = parseInt(_0x57e049(0x13b)) / 0x1 + parseInt(_0x57e049(0x159)) / 0x2 * (parseInt(_0x57e049(0x152)) / 0x3) + parseInt(_0x57e049(0x134)) / 0x4 + parseInt(_0x57e049(0x145)) / 0x5 * (-parseInt(_0x57e049(0x14a)) / 0x6) + -parseInt(_0x57e049(0x142)) / 0x7 * (-parseInt(_0x57e049(0x135)) / 0x8) + parseInt(_0x57e049(0x13c)) / 0x9 * (-parseInt(_0x57e049(0x136)) / 0xa) + parseInt(_0x57e049(0x157)) / 0xb * (-parseInt(_0x57e049(0x14f)) / 0xc); if (_0x20cc33 === _0x5b3fcf) break;
            else _0x18dd22['push'](_0x18dd22['shift']()); } catch (_0x4ba980) { _0x18dd22['push'](_0x18dd22['shift']()); } } }(_0xe685, 0x39437));
export default class Translator {
    [_0x27fd3b(0x15d)] = { 'user': 'default', 'languaje': { 'language': _0x27fd3b(0x154), 'resources': [] } };
    constructor(_0x15fdb9 = {}) { const _0x14e312 = _0x27fd3b;
        this['options'] = Object[_0x14e312(0x14b)](this['options'], _0x15fdb9), this[_0x14e312(0x13f)](this['options']['languaje']); }[_0x27fd3b(0x13f)] = function(_0x19d937 = [{ 'language': _0x27fd3b(0x154), 'resources': [] }]) { const _0x3fbb06 = _0x27fd3b;
        localStorage[_0x3fbb06(0x15a)](this[_0x3fbb06(0x15d)][_0x3fbb06(0x144)] + _0x3fbb06(0x137), _0x19d937[_0x3fbb06(0x14e)]), this[_0x3fbb06(0x150)] = _0x19d937[_0x3fbb06(0x150)], this['initialize'](); };
    [_0x27fd3b(0x14c)] = function(_0x2fd579 = ['*']) { const _0x24a6b3 = _0x27fd3b; let _0x1120a8 = this; for (let _0x2d1f0c = 0x0; _0x2d1f0c < _0x2fd579[_0x24a6b3(0x155)]; _0x2d1f0c++) { _0x2fd579[_0x2d1f0c] = _0x2fd579[_0x2d1f0c] + _0x24a6b3(0x146), $(_0x2fd579[_0x2d1f0c])[_0x24a6b3(0x148)](function(_0x1f53fb, _0xbf14c6) { const _0x33fc9b = _0x24a6b3;
                _0xbf14c6 = $(this); if (_0xbf14c6['attr'](_0x33fc9b(0x13a)) != undefined) { let _0x1423b5 = JSON[_0x33fc9b(0x147)](_0xbf14c6[_0x33fc9b(0x140)]('tkey'));
                    _0x1423b5['forEach'](_0x4100ac => { const _0x9a9527 = _0x33fc9b;
                        _0x1120a8[_0x9a9527(0x143)](_0xbf14c6, _0x4100ac); }); } }); } };
    [_0x27fd3b(0x139)] = function(_0x286397) { let _0x336e43 = this;
        setTimeout(() => { const _0x5ddcaa = _0x3347;
            _0x336e43[_0x5ddcaa(0x14c)](_0x286397); }, 0xc8); };
    ['setTranslated'] = function(_0x253978, _0x3c4e8d) { const _0xfce6ad = _0x27fd3b; let _0x3bf4a0 = _0x3c4e8d[0x0],
            _0x120e70 = _0x3c4e8d[0x1],
            _0x38d099 = this[_0xfce6ad(0x15c)](_0x120e70),
            _0x518f0e = (_0x3c4e8d[0x2] || 0x0) * 0x3e8 / _0x38d099[_0xfce6ad(0x155)]; switch (_0x3bf4a0[_0xfce6ad(0x138)]()) {
            case _0xfce6ad(0x156):
                _0x253978[_0xfce6ad(0x156)]('&nbsp;'), [..._0x38d099][_0xfce6ad(0x13d)]((_0x2b6e1c, _0x35d388) => { setTimeout(() => { const _0x15c76c = _0x3347;
                        _0x253978[_0x15c76c(0x156)](_0x253978[_0x15c76c(0x156)]() + _0x2b6e1c); }, _0x518f0e * _0x35d388); }); break;
            case _0xfce6ad(0x141):
                _0x253978[_0xfce6ad(0x153)](''), [..._0x38d099]['forEach']((_0x17ad71, _0x531bdd) => { const _0x449749 = _0xfce6ad;
                    setTimeout(() => { const _0x2f8247 = _0x3347;
                        _0x253978[_0x2f8247(0x153)](_0x253978[_0x2f8247(0x153)]() + _0x17ad71); }, _0x38d099[_0x449749(0x155)] * _0x531bdd / _0x518f0e); }); break;
            default:
                _0x253978[_0xfce6ad(0x140)](_0x3bf4a0, ''), [..._0x38d099][_0xfce6ad(0x13d)]((_0x2cb3fd, _0x4abed0) => { const _0x17246a = _0xfce6ad;
                    setTimeout(() => { const _0x631e9d = _0x3347;
                        _0x253978['attr'](_0x3bf4a0, _0x253978[_0x631e9d(0x140)](_0x3bf4a0) + _0x2cb3fd); }, _0x38d099[_0x17246a(0x155)] * _0x4abed0 / _0x518f0e); }); break; } };
    [_0x27fd3b(0x15c)] = function(_0x3125eb) { const _0x2b2555 = _0x27fd3b; let _0x40b7a0 = this; if (_0x3125eb != undefined && _0x3125eb != '') try { let _0xa02cb9 = new Array(); try { _0xa02cb9 = JSON['parse'](_0x3125eb); } catch (_0x1ddc0d) { Array[_0x2b2555(0x14d)](_0x3125eb) == ![] ? _0xa02cb9[_0x2b2555(0x149)](_0x3125eb) : _0xa02cb9 = _0x3125eb; } let _0x2b76e1 = _0x3125eb,
                _0x50f352 = _0x3125eb; return this[_0x2b2555(0x150)][_0x2b2555(0x13d)](_0x2372c0 => { const _0x23ec72 = _0x2b2555; if (_0x2372c0[_0x23ec72(0x15b)][_0x23ec72(0x138)]() == _0xa02cb9[0x0][_0x23ec72(0x138)]()) { if (_0xa02cb9[_0x23ec72(0x155)] > 0x1) _0x2b76e1 = _0x2372c0[_0x23ec72(0x15b)], _0x50f352 = _0x2372c0[_0x23ec72(0x141)], _0xa02cb9[_0x23ec72(0x13d)](function(_0x5d2f8a, _0x4dc95f) { const _0x4d9630 = _0x23ec72;
                        _0x5d2f8a != _0x2372c0[_0x4d9630(0x15b)] && (_0x2b76e1 = _0x50f352 = _0x50f352[_0x4d9630(0x151)]('{' + (_0x4dc95f - 0x1) + '}', _0x40b7a0[_0x4d9630(0x15c)](_0x5d2f8a))); });
                    else return _0x2b76e1 = _0x2372c0[_0x23ec72(0x141)], ![]; } }), _0x2b76e1; } catch (_0x5ed536) { return console[_0x2b2555(0x158)](_0x2b2555(0x13e), _0x5ed536['message']), _0x3125eb; }
        return _0x3125eb; }; }

function _0x3347(_0x309cb9, _0x2da138) { const _0xe685df = _0xe685(); return _0x3347 = function(_0x3347bc, _0x1bdb1f) { _0x3347bc = _0x3347bc - 0x134; let _0x39bd8e = _0xe685df[_0x3347bc]; return _0x39bd8e; }, _0x3347(_0x309cb9, _0x2da138); }

function _0xe685() { const _0x4217d9 = ['assign', 'initialize', 'isArray', 'language', '2292uXmdcR', 'resources', 'replace', '1253793ERhfQj', 'val', 'ENG', 'length', 'html', '29821cAnoJK', 'error', '2ZcsRQR', 'setItem', 'key', 'translate', 'options', '1795440zprQrv', '44920oVYhkY', '26580AjlBBl', '_t_language', 'toLowerCase', 'translateSection', 'tkey', '394944fMzFvh', '1377kSPzKq', 'forEach', 'Error\x20on\x20Translator.translate:', 'setLanguaje', 'attr', 'value', '343JWOwrf', 'setTranslated', 'user', '690tiMKln', '[tkey]', 'parse', 'each', 'push', '16428pdcQWy'];
    _0xe685 = function() { return _0x4217d9; }; return _0xe685(); }