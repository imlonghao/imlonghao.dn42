D('imlonghao.dn42', REG_NONE
  , A('anycast', '172.22.68.0')
  , A('us1', '172.22.68.1')
  , A('sg1', '172.22.68.2')
  , A('hk1', '172.22.68.3')
  , A('de1', '172.22.68.4')
  , A('us2', '172.22.68.5')
  , A('no1', '172.22.68.6')
  , A('home', '172.22.68.7')
  , A('ns', '172.22.68.8')
  , A('au1', '172.22.68.9')
  , A('jp1', '172.22.68.10')
  , A('us3', '172.22.68.11')
);

D(REV('172.22.68.0/27'), REG_NONE
  , PTR('0', 'anycast.imlonghao.dn42.')
  , PTR('1', 'us1.imlonghao.dn42.')
  , PTR('2', 'sg1.imlonghao.dn42.')
  , PTR('3', 'hk1.imlonghao.dn42.')
  , PTR('4', 'de1.imlonghao.dn42.')
  , PTR('5', 'us2.imlonghao.dn42.')
  , PTR('6', 'no1.imlonghao.dn42.')
  , PTR('7', 'home.imlonghao.dn42.')
  , PTR('8', 'ns.imlonghao.dn42.')
  , PTR('9', 'au1.imlonghao.dn42.')
  , PTR('10', 'jp1.imlonghao.dn42.')
  , PTR('11', 'us3.imlonghao.dn42.')
);

D(REV('fd21:5c0c:9b7e::/48'), REG_NONE
  , PTR('fd21:5c0c:9b7e::8', 'ns.imlonghao.dn42.')
  , PTR('fd21:5c0c:9b7e:1::1', 'us1.imlonghao.dn42.')
  , PTR('fd21:5c0c:9b7e:2::1', 'sg1.imlonghao.dn42.')
  , PTR('fd21:5c0c:9b7e:3::1', 'hk1.imlonghao.dn42.')
  , PTR('fd21:5c0c:9b7e:4::1', 'de1.imlonghao.dn42.')
  , PTR('fd21:5c0c:9b7e:5::1', 'us2.imlonghao.dn42.')
  , PTR('fd21:5c0c:9b7e:6::1', 'no1.imlonghao.dn42.')
  , PTR('fd21:5c0c:9b7e:7::1', 'home.imlonghao.dn42.')
  , PTR('fd21:5c0c:9b7e:9::1', 'au1.imlonghao.dn42.')
  , PTR('fd21:5c0c:9b7e:10::1', 'jp1.imlonghao.dn42.')
);
