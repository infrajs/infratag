<?php
namespace itlife\infratag;
global $infra;
infra_when($infra,'oninitjs', function () {
	global $infra;
	$infra['js'] .= $infra['require']('*infratag/infra.js');
});