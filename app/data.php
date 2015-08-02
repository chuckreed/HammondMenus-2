<?php

$data = array();
$data['letters'] = array('A', 'C', 'D', 'E', 'K', 'L', 'O', 'P');

$data['restaurants'] = array();

for ($i = 1; $i <= 100; $i++) {
    $rand = rand(0, sizeof($data['letters']) - 1);
    $data['restaurants'][] = array(
        'id'            =>  $i,
        'name'          =>  $data['letters'][$rand][0] . $i,
        'delivers'      =>  ($rand % 2 == 0 ? true : false),
        'address'       =>  "$i Road Way",
        'phone_number'  =>  "123-456-7890",
        'website_url'   =>  ($rand % 2 == 0 ? "http://google.com" : "no website")
    );
}

die(json_encode($data));