var REG_NONE = NewRegistrar('none', 'NONE');
var POWERDNS = NewDnsProvider('powerdns', 'POWERDNS', { 'default_ns': ['ns.imlonghao.dn42.'] });

DEFAULTS(
  DnsProvider(POWERDNS),
  DefaultTTL(3600),
  NAMESERVER_TTL(86400)
);

require('./imlonghao.js');
