// static function OnBeforeRequest(oSession: Session) {
		if (oSession.HostnameIs("mirror.nobugs-justfeatures.com")) {
			// Handle CONNECT Tunnels
			if (oSession.HTTPMethodIs("CONNECT"))
			{
				oSession["x-replywithtunnel"] = "FakeTunnel";
				return;
			}
			oSession.fullUrl = "http://mirror.localhost:80" + oSession.PathAndQuery;
		}

		else if (oSession.HostnameIs("www.nobugs-justfeatures.com")) {
			// Handle CONNECT Tunnels
			if (oSession.HTTPMethodIs("CONNECT"))
			{
				oSession["x-replywithtunnel"] = "FakeTunnel";
				return;
			}
			oSession.fullUrl = "http://www.localhost:80" + oSession.PathAndQuery;
		}

		else if (oSession.HostnameIs("thebestgirlfriend.nobugs-justfeatures.com")) {
			// Handle CONNECT Tunnels
			if (oSession.HTTPMethodIs("CONNECT"))
			{
				oSession["x-replywithtunnel"] = "FakeTunnel";
				return;
			}
			oSession.fullUrl = "http://thebestgirlfriend.localhost:80" + oSession.PathAndQuery;
		}
