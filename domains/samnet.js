D('samnet.dn42', REG_NONE
  , A('sg','172.23.161.64')
  , A('us','172.23.161.66')
  , A('jp','172.23.161.67')
  , A('hk','172.23.161.65')
);

D(REV('172.23.161.64/27'), REG_NONE
  , PTR('64', 'sg.samnet.dn42.')
  , PTR('65', 'hk.samnet.dn42.')
  , PTR('66', 'us.samnet.dn42.')
  , PTR('67', 'jp.samnet.dn42.')
);

