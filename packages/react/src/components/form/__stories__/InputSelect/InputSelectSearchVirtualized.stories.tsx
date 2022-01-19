import { Story } from '@storybook/react';
import * as React from 'react';
import { InputSelectSearchVirtualized, InputSelectSearchVirtualizedProps } from '../../components/InputSelect';

const timezone = [
  {
    timezoneId: 'Africa/Abidjan',
    timezoneDisplay: 'Africa/Abidjan GMT+00',
  },
  {
    timezoneId: 'Africa/Accra',
    timezoneDisplay: 'Africa/Accra GMT+00',
  },
  {
    timezoneId: 'Africa/Addis_Ababa',
    timezoneDisplay: 'Africa/Addis_Ababa GMT+03',
  },
  {
    timezoneId: 'Africa/Algiers',
    timezoneDisplay: 'Africa/Algiers GMT+01',
  },
  {
    timezoneId: 'Africa/Asmara',
    timezoneDisplay: 'Africa/Asmara GMT+03',
  },
  {
    timezoneId: 'Africa/Asmera',
    timezoneDisplay: 'Africa/Asmera GMT+03',
  },
  {
    timezoneId: 'Africa/Bamako',
    timezoneDisplay: 'Africa/Bamako GMT+00',
  },
  {
    timezoneId: 'Africa/Bangui',
    timezoneDisplay: 'Africa/Bangui GMT+01',
  },
  {
    timezoneId: 'Africa/Banjul',
    timezoneDisplay: 'Africa/Banjul GMT+00',
  },
  {
    timezoneId: 'Africa/Bissau',
    timezoneDisplay: 'Africa/Bissau GMT+00',
  },
  {
    timezoneId: 'Africa/Blantyre',
    timezoneDisplay: 'Africa/Blantyre GMT+02',
  },
  {
    timezoneId: 'Africa/Brazzaville',
    timezoneDisplay: 'Africa/Brazzaville GMT+01',
  },
  {
    timezoneId: 'Africa/Bujumbura',
    timezoneDisplay: 'Africa/Bujumbura GMT+02',
  },
  {
    timezoneId: 'Africa/Cairo',
    timezoneDisplay: 'Africa/Cairo GMT+02',
  },
  {
    timezoneId: 'Africa/Casablanca',
    timezoneDisplay: 'Africa/Casablanca GMT+01',
  },
  {
    timezoneId: 'Africa/Ceuta',
    timezoneDisplay: 'Africa/Ceuta GMT+01',
  },
  {
    timezoneId: 'Africa/Conakry',
    timezoneDisplay: 'Africa/Conakry GMT+00',
  },
  {
    timezoneId: 'Africa/Dakar',
    timezoneDisplay: 'Africa/Dakar GMT+00',
  },
  {
    timezoneId: 'Africa/Dar_es_Salaam',
    timezoneDisplay: 'Africa/Dar_es_Salaam GMT+03',
  },
  {
    timezoneId: 'Africa/Djibouti',
    timezoneDisplay: 'Africa/Djibouti GMT+03',
  },
  {
    timezoneId: 'Africa/Douala',
    timezoneDisplay: 'Africa/Douala GMT+01',
  },
  {
    timezoneId: 'Africa/El_Aaiun',
    timezoneDisplay: 'Africa/El_Aaiun GMT+01',
  },
  {
    timezoneId: 'Africa/Freetown',
    timezoneDisplay: 'Africa/Freetown GMT+00',
  },
  {
    timezoneId: 'Africa/Gaborone',
    timezoneDisplay: 'Africa/Gaborone GMT+02',
  },
  {
    timezoneId: 'Africa/Harare',
    timezoneDisplay: 'Africa/Harare GMT+02',
  },
  {
    timezoneId: 'Africa/Johannesburg',
    timezoneDisplay: 'Africa/Johannesburg GMT+02',
  },
  {
    timezoneId: 'Africa/Juba',
    timezoneDisplay: 'Africa/Juba GMT+02',
  },
  {
    timezoneId: 'Africa/Kampala',
    timezoneDisplay: 'Africa/Kampala GMT+03',
  },
  {
    timezoneId: 'Africa/Khartoum',
    timezoneDisplay: 'Africa/Khartoum GMT+02',
  },
  {
    timezoneId: 'Africa/Kigali',
    timezoneDisplay: 'Africa/Kigali GMT+02',
  },
  {
    timezoneId: 'Africa/Kinshasa',
    timezoneDisplay: 'Africa/Kinshasa GMT+01',
  },
  {
    timezoneId: 'Africa/Lagos',
    timezoneDisplay: 'Africa/Lagos GMT+01',
  },
  {
    timezoneId: 'Africa/Libreville',
    timezoneDisplay: 'Africa/Libreville GMT+01',
  },
  {
    timezoneId: 'Africa/Lome',
    timezoneDisplay: 'Africa/Lome GMT+00',
  },
  {
    timezoneId: 'Africa/Luanda',
    timezoneDisplay: 'Africa/Luanda GMT+01',
  },
  {
    timezoneId: 'Africa/Lubumbashi',
    timezoneDisplay: 'Africa/Lubumbashi GMT+02',
  },
  {
    timezoneId: 'Africa/Lusaka',
    timezoneDisplay: 'Africa/Lusaka GMT+02',
  },
  {
    timezoneId: 'Africa/Malabo',
    timezoneDisplay: 'Africa/Malabo GMT+01',
  },
  {
    timezoneId: 'Africa/Maputo',
    timezoneDisplay: 'Africa/Maputo GMT+02',
  },
  {
    timezoneId: 'Africa/Maseru',
    timezoneDisplay: 'Africa/Maseru GMT+02',
  },
  {
    timezoneId: 'Africa/Mbabane',
    timezoneDisplay: 'Africa/Mbabane GMT+02',
  },
  {
    timezoneId: 'Africa/Mogadishu',
    timezoneDisplay: 'Africa/Mogadishu GMT+03',
  },
  {
    timezoneId: 'Africa/Monrovia',
    timezoneDisplay: 'Africa/Monrovia GMT+00',
  },
  {
    timezoneId: 'Africa/Nairobi',
    timezoneDisplay: 'Africa/Nairobi GMT+03',
  },
  {
    timezoneId: 'Africa/Ndjamena',
    timezoneDisplay: 'Africa/Ndjamena GMT+01',
  },
  {
    timezoneId: 'Africa/Niamey',
    timezoneDisplay: 'Africa/Niamey GMT+01',
  },
  {
    timezoneId: 'Africa/Nouakchott',
    timezoneDisplay: 'Africa/Nouakchott GMT+00',
  },
  {
    timezoneId: 'Africa/Ouagadougou',
    timezoneDisplay: 'Africa/Ouagadougou GMT+00',
  },
  {
    timezoneId: 'Africa/Porto-Novo',
    timezoneDisplay: 'Africa/Porto-Novo GMT+01',
  },
  {
    timezoneId: 'Africa/Sao_Tome',
    timezoneDisplay: 'Africa/Sao_Tome GMT+00',
  },
  {
    timezoneId: 'Africa/Timbuktu',
    timezoneDisplay: 'Africa/Timbuktu GMT+00',
  },
  {
    timezoneId: 'Africa/Tripoli',
    timezoneDisplay: 'Africa/Tripoli GMT+02',
  },
  {
    timezoneId: 'Africa/Tunis',
    timezoneDisplay: 'Africa/Tunis GMT+01',
  },
  {
    timezoneId: 'Africa/Windhoek',
    timezoneDisplay: 'Africa/Windhoek GMT+02',
  },
  {
    timezoneId: 'America/Adak',
    timezoneDisplay: 'America/Adak GMT-10',
  },
  {
    timezoneId: 'America/Anchorage',
    timezoneDisplay: 'America/Anchorage GMT-09',
  },
  {
    timezoneId: 'America/Anguilla',
    timezoneDisplay: 'America/Anguilla GMT-04',
  },
  {
    timezoneId: 'America/Antigua',
    timezoneDisplay: 'America/Antigua GMT-04',
  },
  {
    timezoneId: 'America/Araguaina',
    timezoneDisplay: 'America/Araguaina GMT-03',
  },
  {
    timezoneId: 'America/Argentina/Buenos_Aires',
    timezoneDisplay: 'America/Argentina/Buenos_Aires GMT-03',
  },
  {
    timezoneId: 'America/Argentina/Catamarca',
    timezoneDisplay: 'America/Argentina/Catamarca GMT-03',
  },
  {
    timezoneId: 'America/Argentina/ComodRivadavia',
    timezoneDisplay: 'America/Argentina/ComodRivadavia GMT-03',
  },
  {
    timezoneId: 'America/Argentina/Cordoba',
    timezoneDisplay: 'America/Argentina/Cordoba GMT-03',
  },
  {
    timezoneId: 'America/Argentina/Jujuy',
    timezoneDisplay: 'America/Argentina/Jujuy GMT-03',
  },
  {
    timezoneId: 'America/Argentina/La_Rioja',
    timezoneDisplay: 'America/Argentina/La_Rioja GMT-03',
  },
  {
    timezoneId: 'America/Argentina/Mendoza',
    timezoneDisplay: 'America/Argentina/Mendoza GMT-03',
  },
  {
    timezoneId: 'America/Argentina/Rio_Gallegos',
    timezoneDisplay: 'America/Argentina/Rio_Gallegos GMT-03',
  },
  {
    timezoneId: 'America/Argentina/Salta',
    timezoneDisplay: 'America/Argentina/Salta GMT-03',
  },
  {
    timezoneId: 'America/Argentina/San_Juan',
    timezoneDisplay: 'America/Argentina/San_Juan GMT-03',
  },
  {
    timezoneId: 'America/Argentina/San_Luis',
    timezoneDisplay: 'America/Argentina/San_Luis GMT-03',
  },
  {
    timezoneId: 'America/Argentina/Tucuman',
    timezoneDisplay: 'America/Argentina/Tucuman GMT-03',
  },
  {
    timezoneId: 'America/Argentina/Ushuaia',
    timezoneDisplay: 'America/Argentina/Ushuaia GMT-03',
  },
  {
    timezoneId: 'America/Aruba',
    timezoneDisplay: 'America/Aruba GMT-04',
  },
  {
    timezoneId: 'America/Asuncion',
    timezoneDisplay: 'America/Asuncion GMT-03',
  },
  {
    timezoneId: 'America/Atikokan',
    timezoneDisplay: 'America/Atikokan GMT-05',
  },
  {
    timezoneId: 'America/Atka',
    timezoneDisplay: 'America/Atka GMT-10',
  },
  {
    timezoneId: 'America/Bahia',
    timezoneDisplay: 'America/Bahia GMT-03',
  },
  {
    timezoneId: 'America/Bahia_Banderas',
    timezoneDisplay: 'America/Bahia_Banderas GMT-06',
  },
  {
    timezoneId: 'America/Barbados',
    timezoneDisplay: 'America/Barbados GMT-04',
  },
  {
    timezoneId: 'America/Belem',
    timezoneDisplay: 'America/Belem GMT-03',
  },
  {
    timezoneId: 'America/Belize',
    timezoneDisplay: 'America/Belize GMT-06',
  },
  {
    timezoneId: 'America/Blanc-Sablon',
    timezoneDisplay: 'America/Blanc-Sablon GMT-04',
  },
  {
    timezoneId: 'America/Boa_Vista',
    timezoneDisplay: 'America/Boa_Vista GMT-04',
  },
  {
    timezoneId: 'America/Bogota',
    timezoneDisplay: 'America/Bogota GMT-05',
  },
  {
    timezoneId: 'America/Boise',
    timezoneDisplay: 'America/Boise GMT-07',
  },
  {
    timezoneId: 'America/Buenos_Aires',
    timezoneDisplay: 'America/Buenos_Aires GMT-03',
  },
  {
    timezoneId: 'America/Cambridge_Bay',
    timezoneDisplay: 'America/Cambridge_Bay GMT-07',
  },
  {
    timezoneId: 'America/Campo_Grande',
    timezoneDisplay: 'America/Campo_Grande GMT-04',
  },
  {
    timezoneId: 'America/Cancun',
    timezoneDisplay: 'America/Cancun GMT-05',
  },
  {
    timezoneId: 'America/Caracas',
    timezoneDisplay: 'America/Caracas GMT-04',
  },
  {
    timezoneId: 'America/Catamarca',
    timezoneDisplay: 'America/Catamarca GMT-03',
  },
  {
    timezoneId: 'America/Cayenne',
    timezoneDisplay: 'America/Cayenne GMT-03',
  },
  {
    timezoneId: 'America/Cayman',
    timezoneDisplay: 'America/Cayman GMT-05',
  },
  {
    timezoneId: 'America/Chicago',
    timezoneDisplay: 'America/Chicago GMT-06',
  },
  {
    timezoneId: 'America/Chihuahua',
    timezoneDisplay: 'America/Chihuahua GMT-07',
  },
  {
    timezoneId: 'America/Coral_Harbour',
    timezoneDisplay: 'America/Coral_Harbour GMT-05',
  },
  {
    timezoneId: 'America/Cordoba',
    timezoneDisplay: 'America/Cordoba GMT-03',
  },
  {
    timezoneId: 'America/Costa_Rica',
    timezoneDisplay: 'America/Costa_Rica GMT-06',
  },
  {
    timezoneId: 'America/Creston',
    timezoneDisplay: 'America/Creston GMT-07',
  },
  {
    timezoneId: 'America/Cuiaba',
    timezoneDisplay: 'America/Cuiaba GMT-04',
  },
  {
    timezoneId: 'America/Curacao',
    timezoneDisplay: 'America/Curacao GMT-04',
  },
  {
    timezoneId: 'America/Danmarkshavn',
    timezoneDisplay: 'America/Danmarkshavn GMT+00',
  },
  {
    timezoneId: 'America/Dawson',
    timezoneDisplay: 'America/Dawson GMT-07',
  },
  {
    timezoneId: 'America/Dawson_Creek',
    timezoneDisplay: 'America/Dawson_Creek GMT-07',
  },
  {
    timezoneId: 'America/Denver',
    timezoneDisplay: 'America/Denver GMT-07',
  },
  {
    timezoneId: 'America/Detroit',
    timezoneDisplay: 'America/Detroit GMT-05',
  },
  {
    timezoneId: 'America/Dominica',
    timezoneDisplay: 'America/Dominica GMT-04',
  },
  {
    timezoneId: 'America/Edmonton',
    timezoneDisplay: 'America/Edmonton GMT-07',
  },
  {
    timezoneId: 'America/Eirunepe',
    timezoneDisplay: 'America/Eirunepe GMT-05',
  },
  {
    timezoneId: 'America/El_Salvador',
    timezoneDisplay: 'America/El_Salvador GMT-06',
  },
  {
    timezoneId: 'America/Ensenada',
    timezoneDisplay: 'America/Ensenada GMT-08',
  },
  {
    timezoneId: 'America/Fort_Nelson',
    timezoneDisplay: 'America/Fort_Nelson GMT-07',
  },
  {
    timezoneId: 'America/Fort_Wayne',
    timezoneDisplay: 'America/Fort_Wayne GMT-05',
  },
  {
    timezoneId: 'America/Fortaleza',
    timezoneDisplay: 'America/Fortaleza GMT-03',
  },
  {
    timezoneId: 'America/Glace_Bay',
    timezoneDisplay: 'America/Glace_Bay GMT-04',
  },
  {
    timezoneId: 'America/Godthab',
    timezoneDisplay: 'America/Godthab GMT-03',
  },
  {
    timezoneId: 'America/Goose_Bay',
    timezoneDisplay: 'America/Goose_Bay GMT-04',
  },
  {
    timezoneId: 'America/Grand_Turk',
    timezoneDisplay: 'America/Grand_Turk GMT-05',
  },
  {
    timezoneId: 'America/Grenada',
    timezoneDisplay: 'America/Grenada GMT-04',
  },
  {
    timezoneId: 'America/Guadeloupe',
    timezoneDisplay: 'America/Guadeloupe GMT-04',
  },
  {
    timezoneId: 'America/Guatemala',
    timezoneDisplay: 'America/Guatemala GMT-06',
  },
  {
    timezoneId: 'America/Guayaquil',
    timezoneDisplay: 'America/Guayaquil GMT-05',
  },
  {
    timezoneId: 'America/Guyana',
    timezoneDisplay: 'America/Guyana GMT-04',
  },
  {
    timezoneId: 'America/Halifax',
    timezoneDisplay: 'America/Halifax GMT-04',
  },
  {
    timezoneId: 'America/Havana',
    timezoneDisplay: 'America/Havana GMT-05',
  },
  {
    timezoneId: 'America/Hermosillo',
    timezoneDisplay: 'America/Hermosillo GMT-07',
  },
  {
    timezoneId: 'America/Indiana/Indianapolis',
    timezoneDisplay: 'America/Indiana/Indianapolis GMT-05',
  },
  {
    timezoneId: 'America/Indiana/Knox',
    timezoneDisplay: 'America/Indiana/Knox GMT-06',
  },
  {
    timezoneId: 'America/Indiana/Marengo',
    timezoneDisplay: 'America/Indiana/Marengo GMT-05',
  },
  {
    timezoneId: 'America/Indiana/Petersburg',
    timezoneDisplay: 'America/Indiana/Petersburg GMT-05',
  },
  {
    timezoneId: 'America/Indiana/Tell_City',
    timezoneDisplay: 'America/Indiana/Tell_City GMT-06',
  },
  {
    timezoneId: 'America/Indiana/Vevay',
    timezoneDisplay: 'America/Indiana/Vevay GMT-05',
  },
  {
    timezoneId: 'America/Indiana/Vincennes',
    timezoneDisplay: 'America/Indiana/Vincennes GMT-05',
  },
  {
    timezoneId: 'America/Indiana/Winamac',
    timezoneDisplay: 'America/Indiana/Winamac GMT-05',
  },
  {
    timezoneId: 'America/Indianapolis',
    timezoneDisplay: 'America/Indianapolis GMT-05',
  },
  {
    timezoneId: 'America/Inuvik',
    timezoneDisplay: 'America/Inuvik GMT-07',
  },
  {
    timezoneId: 'America/Iqaluit',
    timezoneDisplay: 'America/Iqaluit GMT-05',
  },
  {
    timezoneId: 'America/Jamaica',
    timezoneDisplay: 'America/Jamaica GMT-05',
  },
  {
    timezoneId: 'America/Jujuy',
    timezoneDisplay: 'America/Jujuy GMT-03',
  },
  {
    timezoneId: 'America/Juneau',
    timezoneDisplay: 'America/Juneau GMT-09',
  },
  {
    timezoneId: 'America/Kentucky/Louisville',
    timezoneDisplay: 'America/Kentucky/Louisville GMT-05',
  },
  {
    timezoneId: 'America/Kentucky/Monticello',
    timezoneDisplay: 'America/Kentucky/Monticello GMT-05',
  },
  {
    timezoneId: 'America/Knox_IN',
    timezoneDisplay: 'America/Knox_IN GMT-06',
  },
  {
    timezoneId: 'America/Kralendijk',
    timezoneDisplay: 'America/Kralendijk GMT-04',
  },
  {
    timezoneId: 'America/La_Paz',
    timezoneDisplay: 'America/La_Paz GMT-04',
  },
  {
    timezoneId: 'America/Lima',
    timezoneDisplay: 'America/Lima GMT-05',
  },
  {
    timezoneId: 'America/Los_Angeles',
    timezoneDisplay: 'America/Los_Angeles GMT-08',
  },
  {
    timezoneId: 'America/Louisville',
    timezoneDisplay: 'America/Louisville GMT-05',
  },
  {
    timezoneId: 'America/Lower_Princes',
    timezoneDisplay: 'America/Lower_Princes GMT-04',
  },
  {
    timezoneId: 'America/Maceio',
    timezoneDisplay: 'America/Maceio GMT-03',
  },
  {
    timezoneId: 'America/Managua',
    timezoneDisplay: 'America/Managua GMT-06',
  },
  {
    timezoneId: 'America/Manaus',
    timezoneDisplay: 'America/Manaus GMT-04',
  },
  {
    timezoneId: 'America/Marigot',
    timezoneDisplay: 'America/Marigot GMT-04',
  },
  {
    timezoneId: 'America/Martinique',
    timezoneDisplay: 'America/Martinique GMT-04',
  },
  {
    timezoneId: 'America/Matamoros',
    timezoneDisplay: 'America/Matamoros GMT-06',
  },
  {
    timezoneId: 'America/Mazatlan',
    timezoneDisplay: 'America/Mazatlan GMT-07',
  },
  {
    timezoneId: 'America/Mendoza',
    timezoneDisplay: 'America/Mendoza GMT-03',
  },
  {
    timezoneId: 'America/Menominee',
    timezoneDisplay: 'America/Menominee GMT-06',
  },
  {
    timezoneId: 'America/Merida',
    timezoneDisplay: 'America/Merida GMT-06',
  },
  {
    timezoneId: 'America/Metlakatla',
    timezoneDisplay: 'America/Metlakatla GMT-09',
  },
  {
    timezoneId: 'America/Mexico_City',
    timezoneDisplay: 'America/Mexico_City GMT-06',
  },
  {
    timezoneId: 'America/Miquelon',
    timezoneDisplay: 'America/Miquelon GMT-03',
  },
  {
    timezoneId: 'America/Moncton',
    timezoneDisplay: 'America/Moncton GMT-04',
  },
  {
    timezoneId: 'America/Monterrey',
    timezoneDisplay: 'America/Monterrey GMT-06',
  },
  {
    timezoneId: 'America/Montevideo',
    timezoneDisplay: 'America/Montevideo GMT-03',
  },
  {
    timezoneId: 'America/Montreal',
    timezoneDisplay: 'America/Montreal GMT-05',
  },
  {
    timezoneId: 'America/Montserrat',
    timezoneDisplay: 'America/Montserrat GMT-04',
  },
  {
    timezoneId: 'America/Nassau',
    timezoneDisplay: 'America/Nassau GMT-05',
  },
  {
    timezoneId: 'America/New_York',
    timezoneDisplay: 'America/New_York GMT-05',
  },
  {
    timezoneId: 'America/Nipigon',
    timezoneDisplay: 'America/Nipigon GMT-05',
  },
  {
    timezoneId: 'America/Nome',
    timezoneDisplay: 'America/Nome GMT-09',
  },
  {
    timezoneId: 'America/Noronha',
    timezoneDisplay: 'America/Noronha GMT-02',
  },
  {
    timezoneId: 'America/North_Dakota/Beulah',
    timezoneDisplay: 'America/North_Dakota/Beulah GMT-06',
  },
  {
    timezoneId: 'America/North_Dakota/Center',
    timezoneDisplay: 'America/North_Dakota/Center GMT-06',
  },
  {
    timezoneId: 'America/North_Dakota/New_Salem',
    timezoneDisplay: 'America/North_Dakota/New_Salem GMT-06',
  },
  {
    timezoneId: 'America/Nuuk',
    timezoneDisplay: 'America/Nuuk GMT-03',
  },
  {
    timezoneId: 'America/Ojinaga',
    timezoneDisplay: 'America/Ojinaga GMT-07',
  },
  {
    timezoneId: 'America/Panama',
    timezoneDisplay: 'America/Panama GMT-05',
  },
  {
    timezoneId: 'America/Pangnirtung',
    timezoneDisplay: 'America/Pangnirtung GMT-05',
  },
  {
    timezoneId: 'America/Paramaribo',
    timezoneDisplay: 'America/Paramaribo GMT-03',
  },
  {
    timezoneId: 'America/Phoenix',
    timezoneDisplay: 'America/Phoenix GMT-07',
  },
  {
    timezoneId: 'America/Port-au-Prince',
    timezoneDisplay: 'America/Port-au-Prince GMT-05',
  },
  {
    timezoneId: 'America/Port_of_Spain',
    timezoneDisplay: 'America/Port_of_Spain GMT-04',
  },
  {
    timezoneId: 'America/Porto_Acre',
    timezoneDisplay: 'America/Porto_Acre GMT-05',
  },
  {
    timezoneId: 'America/Porto_Velho',
    timezoneDisplay: 'America/Porto_Velho GMT-04',
  },
  {
    timezoneId: 'America/Puerto_Rico',
    timezoneDisplay: 'America/Puerto_Rico GMT-04',
  },
  {
    timezoneId: 'America/Punta_Arenas',
    timezoneDisplay: 'America/Punta_Arenas GMT-03',
  },
  {
    timezoneId: 'America/Rainy_River',
    timezoneDisplay: 'America/Rainy_River GMT-06',
  },
  {
    timezoneId: 'America/Rankin_Inlet',
    timezoneDisplay: 'America/Rankin_Inlet GMT-06',
  },
  {
    timezoneId: 'America/Recife',
    timezoneDisplay: 'America/Recife GMT-03',
  },
  {
    timezoneId: 'America/Regina',
    timezoneDisplay: 'America/Regina GMT-06',
  },
  {
    timezoneId: 'America/Resolute',
    timezoneDisplay: 'America/Resolute GMT-06',
  },
  {
    timezoneId: 'America/Rio_Branco',
    timezoneDisplay: 'America/Rio_Branco GMT-05',
  },
  {
    timezoneId: 'America/Rosario',
    timezoneDisplay: 'America/Rosario GMT-03',
  },
  {
    timezoneId: 'America/Santa_Isabel',
    timezoneDisplay: 'America/Santa_Isabel GMT-08',
  },
  {
    timezoneId: 'America/Santarem',
    timezoneDisplay: 'America/Santarem GMT-03',
  },
  {
    timezoneId: 'America/Santiago',
    timezoneDisplay: 'America/Santiago GMT-03',
  },
  {
    timezoneId: 'America/Santo_Domingo',
    timezoneDisplay: 'America/Santo_Domingo GMT-04',
  },
  {
    timezoneId: 'America/Sao_Paulo',
    timezoneDisplay: 'America/Sao_Paulo GMT-03',
  },
  {
    timezoneId: 'America/Scoresbysund',
    timezoneDisplay: 'America/Scoresbysund GMT-01',
  },
  {
    timezoneId: 'America/Shiprock',
    timezoneDisplay: 'America/Shiprock GMT-07',
  },
  {
    timezoneId: 'America/Sitka',
    timezoneDisplay: 'America/Sitka GMT-09',
  },
  {
    timezoneId: 'America/St_Barthelemy',
    timezoneDisplay: 'America/St_Barthelemy GMT-04',
  },
  {
    timezoneId: 'America/St_Johns',
    timezoneDisplay: 'America/St_Johns GMT-03:30',
  },
  {
    timezoneId: 'America/St_Kitts',
    timezoneDisplay: 'America/St_Kitts GMT-04',
  },
  {
    timezoneId: 'America/St_Lucia',
    timezoneDisplay: 'America/St_Lucia GMT-04',
  },
  {
    timezoneId: 'America/St_Thomas',
    timezoneDisplay: 'America/St_Thomas GMT-04',
  },
  {
    timezoneId: 'America/St_Vincent',
    timezoneDisplay: 'America/St_Vincent GMT-04',
  },
  {
    timezoneId: 'America/Swift_Current',
    timezoneDisplay: 'America/Swift_Current GMT-06',
  },
  {
    timezoneId: 'America/Tegucigalpa',
    timezoneDisplay: 'America/Tegucigalpa GMT-06',
  },
  {
    timezoneId: 'America/Thule',
    timezoneDisplay: 'America/Thule GMT-04',
  },
  {
    timezoneId: 'America/Thunder_Bay',
    timezoneDisplay: 'America/Thunder_Bay GMT-05',
  },
  {
    timezoneId: 'America/Tijuana',
    timezoneDisplay: 'America/Tijuana GMT-08',
  },
  {
    timezoneId: 'America/Toronto',
    timezoneDisplay: 'America/Toronto GMT-05',
  },
  {
    timezoneId: 'America/Tortola',
    timezoneDisplay: 'America/Tortola GMT-04',
  },
  {
    timezoneId: 'America/Vancouver',
    timezoneDisplay: 'America/Vancouver GMT-08',
  },
  {
    timezoneId: 'America/Virgin',
    timezoneDisplay: 'America/Virgin GMT-04',
  },
  {
    timezoneId: 'America/Whitehorse',
    timezoneDisplay: 'America/Whitehorse GMT-07',
  },
  {
    timezoneId: 'America/Winnipeg',
    timezoneDisplay: 'America/Winnipeg GMT-06',
  },
  {
    timezoneId: 'America/Yakutat',
    timezoneDisplay: 'America/Yakutat GMT-09',
  },
  {
    timezoneId: 'America/Yellowknife',
    timezoneDisplay: 'America/Yellowknife GMT-07',
  },
  {
    timezoneId: 'Antarctica/Casey',
    timezoneDisplay: 'Antarctica/Casey GMT+11',
  },
  {
    timezoneId: 'Antarctica/Davis',
    timezoneDisplay: 'Antarctica/Davis GMT+07',
  },
  {
    timezoneId: 'Antarctica/DumontDUrville',
    timezoneDisplay: 'Antarctica/DumontDUrville GMT+10',
  },
  {
    timezoneId: 'Antarctica/Macquarie',
    timezoneDisplay: 'Antarctica/Macquarie GMT+11',
  },
  {
    timezoneId: 'Antarctica/Mawson',
    timezoneDisplay: 'Antarctica/Mawson GMT+05',
  },
  {
    timezoneId: 'Antarctica/McMurdo',
    timezoneDisplay: 'Antarctica/McMurdo GMT+13',
  },
  {
    timezoneId: 'Antarctica/Palmer',
    timezoneDisplay: 'Antarctica/Palmer GMT-03',
  },
  {
    timezoneId: 'Antarctica/Rothera',
    timezoneDisplay: 'Antarctica/Rothera GMT-03',
  },
  {
    timezoneId: 'Antarctica/South_Pole',
    timezoneDisplay: 'Antarctica/South_Pole GMT+13',
  },
  {
    timezoneId: 'Antarctica/Syowa',
    timezoneDisplay: 'Antarctica/Syowa GMT+03',
  },
  {
    timezoneId: 'Antarctica/Troll',
    timezoneDisplay: 'Antarctica/Troll GMT+00',
  },
  {
    timezoneId: 'Antarctica/Vostok',
    timezoneDisplay: 'Antarctica/Vostok GMT+06',
  },
  {
    timezoneId: 'Arctic/Longyearbyen',
    timezoneDisplay: 'Arctic/Longyearbyen GMT+01',
  },
  {
    timezoneId: 'Asia/Aden',
    timezoneDisplay: 'Asia/Aden GMT+03',
  },
  {
    timezoneId: 'Asia/Almaty',
    timezoneDisplay: 'Asia/Almaty GMT+06',
  },
  {
    timezoneId: 'Asia/Amman',
    timezoneDisplay: 'Asia/Amman GMT+02',
  },
  {
    timezoneId: 'Asia/Anadyr',
    timezoneDisplay: 'Asia/Anadyr GMT+12',
  },
  {
    timezoneId: 'Asia/Aqtau',
    timezoneDisplay: 'Asia/Aqtau GMT+05',
  },
  {
    timezoneId: 'Asia/Aqtobe',
    timezoneDisplay: 'Asia/Aqtobe GMT+05',
  },
  {
    timezoneId: 'Asia/Ashgabat',
    timezoneDisplay: 'Asia/Ashgabat GMT+05',
  },
  {
    timezoneId: 'Asia/Ashkhabad',
    timezoneDisplay: 'Asia/Ashkhabad GMT+05',
  },
  {
    timezoneId: 'Asia/Atyrau',
    timezoneDisplay: 'Asia/Atyrau GMT+05',
  },
  {
    timezoneId: 'Asia/Baghdad',
    timezoneDisplay: 'Asia/Baghdad GMT+03',
  },
  {
    timezoneId: 'Asia/Bahrain',
    timezoneDisplay: 'Asia/Bahrain GMT+03',
  },
  {
    timezoneId: 'Asia/Baku',
    timezoneDisplay: 'Asia/Baku GMT+04',
  },
  {
    timezoneId: 'Asia/Bangkok',
    timezoneDisplay: 'Asia/Bangkok GMT+07',
  },
  {
    timezoneId: 'Asia/Barnaul',
    timezoneDisplay: 'Asia/Barnaul GMT+07',
  },
  {
    timezoneId: 'Asia/Beirut',
    timezoneDisplay: 'Asia/Beirut GMT+02',
  },
  {
    timezoneId: 'Asia/Bishkek',
    timezoneDisplay: 'Asia/Bishkek GMT+06',
  },
  {
    timezoneId: 'Asia/Brunei',
    timezoneDisplay: 'Asia/Brunei GMT+08',
  },
  {
    timezoneId: 'Asia/Calcutta',
    timezoneDisplay: 'Asia/Calcutta GMT+05:30',
  },
  {
    timezoneId: 'Asia/Chita',
    timezoneDisplay: 'Asia/Chita GMT+09',
  },
  {
    timezoneId: 'Asia/Choibalsan',
    timezoneDisplay: 'Asia/Choibalsan GMT+08',
  },
  {
    timezoneId: 'Asia/Chongqing',
    timezoneDisplay: 'Asia/Chongqing GMT+08',
  },
  {
    timezoneId: 'Asia/Chungking',
    timezoneDisplay: 'Asia/Chungking GMT+08',
  },
  {
    timezoneId: 'Asia/Colombo',
    timezoneDisplay: 'Asia/Colombo GMT+05:30',
  },
  {
    timezoneId: 'Asia/Dacca',
    timezoneDisplay: 'Asia/Dacca GMT+06',
  },
  {
    timezoneId: 'Asia/Damascus',
    timezoneDisplay: 'Asia/Damascus GMT+02',
  },
  {
    timezoneId: 'Asia/Dhaka',
    timezoneDisplay: 'Asia/Dhaka GMT+06',
  },
  {
    timezoneId: 'Asia/Dili',
    timezoneDisplay: 'Asia/Dili GMT+09',
  },
  {
    timezoneId: 'Asia/Dubai',
    timezoneDisplay: 'Asia/Dubai GMT+04',
  },
  {
    timezoneId: 'Asia/Dushanbe',
    timezoneDisplay: 'Asia/Dushanbe GMT+05',
  },
  {
    timezoneId: 'Asia/Famagusta',
    timezoneDisplay: 'Asia/Famagusta GMT+02',
  },
  {
    timezoneId: 'Asia/Gaza',
    timezoneDisplay: 'Asia/Gaza GMT+02',
  },
  {
    timezoneId: 'Asia/Harbin',
    timezoneDisplay: 'Asia/Harbin GMT+08',
  },
  {
    timezoneId: 'Asia/Hebron',
    timezoneDisplay: 'Asia/Hebron GMT+02',
  },
  {
    timezoneId: 'Asia/Ho_Chi_Minh',
    timezoneDisplay: 'Asia/Ho_Chi_Minh GMT+07',
  },
  {
    timezoneId: 'Asia/Hong_Kong',
    timezoneDisplay: 'Asia/Hong_Kong GMT+08',
  },
  {
    timezoneId: 'Asia/Hovd',
    timezoneDisplay: 'Asia/Hovd GMT+07',
  },
  {
    timezoneId: 'Asia/Irkutsk',
    timezoneDisplay: 'Asia/Irkutsk GMT+08',
  },
  {
    timezoneId: 'Asia/Istanbul',
    timezoneDisplay: 'Asia/Istanbul GMT+03',
  },
  {
    timezoneId: 'Asia/Jakarta',
    timezoneDisplay: 'Asia/Jakarta GMT+07',
  },
  {
    timezoneId: 'Asia/Jayapura',
    timezoneDisplay: 'Asia/Jayapura GMT+09',
  },
  {
    timezoneId: 'Asia/Jerusalem',
    timezoneDisplay: 'Asia/Jerusalem GMT+02',
  },
  {
    timezoneId: 'Asia/Kabul',
    timezoneDisplay: 'Asia/Kabul GMT+04:30',
  },
  {
    timezoneId: 'Asia/Kamchatka',
    timezoneDisplay: 'Asia/Kamchatka GMT+12',
  },
  {
    timezoneId: 'Asia/Karachi',
    timezoneDisplay: 'Asia/Karachi GMT+05',
  },
  {
    timezoneId: 'Asia/Kashgar',
    timezoneDisplay: 'Asia/Kashgar GMT+06',
  },
  {
    timezoneId: 'Asia/Kathmandu',
    timezoneDisplay: 'Asia/Kathmandu GMT+05:45',
  },
  {
    timezoneId: 'Asia/Katmandu',
    timezoneDisplay: 'Asia/Katmandu GMT+05:45',
  },
  {
    timezoneId: 'Asia/Khandyga',
    timezoneDisplay: 'Asia/Khandyga GMT+09',
  },
  {
    timezoneId: 'Asia/Kolkata',
    timezoneDisplay: 'Asia/Kolkata GMT+05:30',
  },
  {
    timezoneId: 'Asia/Krasnoyarsk',
    timezoneDisplay: 'Asia/Krasnoyarsk GMT+07',
  },
  {
    timezoneId: 'Asia/Kuala_Lumpur',
    timezoneDisplay: 'Asia/Kuala_Lumpur GMT+08',
  },
  {
    timezoneId: 'Asia/Kuching',
    timezoneDisplay: 'Asia/Kuching GMT+08',
  },
  {
    timezoneId: 'Asia/Kuwait',
    timezoneDisplay: 'Asia/Kuwait GMT+03',
  },
  {
    timezoneId: 'Asia/Macao',
    timezoneDisplay: 'Asia/Macao GMT+08',
  },
  {
    timezoneId: 'Asia/Macau',
    timezoneDisplay: 'Asia/Macau GMT+08',
  },
  {
    timezoneId: 'Asia/Magadan',
    timezoneDisplay: 'Asia/Magadan GMT+11',
  },
  {
    timezoneId: 'Asia/Makassar',
    timezoneDisplay: 'Asia/Makassar GMT+08',
  },
  {
    timezoneId: 'Asia/Manila',
    timezoneDisplay: 'Asia/Manila GMT+08',
  },
  {
    timezoneId: 'Asia/Muscat',
    timezoneDisplay: 'Asia/Muscat GMT+04',
  },
  {
    timezoneId: 'Asia/Nicosia',
    timezoneDisplay: 'Asia/Nicosia GMT+02',
  },
  {
    timezoneId: 'Asia/Novokuznetsk',
    timezoneDisplay: 'Asia/Novokuznetsk GMT+07',
  },
  {
    timezoneId: 'Asia/Novosibirsk',
    timezoneDisplay: 'Asia/Novosibirsk GMT+07',
  },
  {
    timezoneId: 'Asia/Omsk',
    timezoneDisplay: 'Asia/Omsk GMT+06',
  },
  {
    timezoneId: 'Asia/Oral',
    timezoneDisplay: 'Asia/Oral GMT+05',
  },
  {
    timezoneId: 'Asia/Phnom_Penh',
    timezoneDisplay: 'Asia/Phnom_Penh GMT+07',
  },
  {
    timezoneId: 'Asia/Pontianak',
    timezoneDisplay: 'Asia/Pontianak GMT+07',
  },
  {
    timezoneId: 'Asia/Pyongyang',
    timezoneDisplay: 'Asia/Pyongyang GMT+09',
  },
  {
    timezoneId: 'Asia/Qatar',
    timezoneDisplay: 'Asia/Qatar GMT+03',
  },
  {
    timezoneId: 'Asia/Qostanay',
    timezoneDisplay: 'Asia/Qostanay GMT+06',
  },
  {
    timezoneId: 'Asia/Qyzylorda',
    timezoneDisplay: 'Asia/Qyzylorda GMT+05',
  },
  {
    timezoneId: 'Asia/Rangoon',
    timezoneDisplay: 'Asia/Rangoon GMT+06:30',
  },
  {
    timezoneId: 'Asia/Riyadh',
    timezoneDisplay: 'Asia/Riyadh GMT+03',
  },
  {
    timezoneId: 'Asia/Saigon',
    timezoneDisplay: 'Asia/Saigon GMT+07',
  },
  {
    timezoneId: 'Asia/Sakhalin',
    timezoneDisplay: 'Asia/Sakhalin GMT+11',
  },
  {
    timezoneId: 'Asia/Samarkand',
    timezoneDisplay: 'Asia/Samarkand GMT+05',
  },
  {
    timezoneId: 'Asia/Seoul',
    timezoneDisplay: 'Asia/Seoul GMT+09',
  },
  {
    timezoneId: 'Asia/Shanghai',
    timezoneDisplay: 'Asia/Shanghai GMT+08',
  },
  {
    timezoneId: 'Asia/Singapore',
    timezoneDisplay: 'Asia/Singapore GMT+08',
  },
  {
    timezoneId: 'Asia/Srednekolymsk',
    timezoneDisplay: 'Asia/Srednekolymsk GMT+11',
  },
  {
    timezoneId: 'Asia/Taipei',
    timezoneDisplay: 'Asia/Taipei GMT+08',
  },
  {
    timezoneId: 'Asia/Tashkent',
    timezoneDisplay: 'Asia/Tashkent GMT+05',
  },
  {
    timezoneId: 'Asia/Tbilisi',
    timezoneDisplay: 'Asia/Tbilisi GMT+04',
  },
  {
    timezoneId: 'Asia/Tehran',
    timezoneDisplay: 'Asia/Tehran GMT+03:30',
  },
  {
    timezoneId: 'Asia/Tel_Aviv',
    timezoneDisplay: 'Asia/Tel_Aviv GMT+02',
  },
  {
    timezoneId: 'Asia/Thimbu',
    timezoneDisplay: 'Asia/Thimbu GMT+06',
  },
  {
    timezoneId: 'Asia/Thimphu',
    timezoneDisplay: 'Asia/Thimphu GMT+06',
  },
  {
    timezoneId: 'Asia/Tokyo',
    timezoneDisplay: 'Asia/Tokyo GMT+09',
  },
  {
    timezoneId: 'Asia/Tomsk',
    timezoneDisplay: 'Asia/Tomsk GMT+07',
  },
  {
    timezoneId: 'Asia/Ujung_Pandang',
    timezoneDisplay: 'Asia/Ujung_Pandang GMT+08',
  },
  {
    timezoneId: 'Asia/Ulaanbaatar',
    timezoneDisplay: 'Asia/Ulaanbaatar GMT+08',
  },
  {
    timezoneId: 'Asia/Ulan_Bator',
    timezoneDisplay: 'Asia/Ulan_Bator GMT+08',
  },
  {
    timezoneId: 'Asia/Urumqi',
    timezoneDisplay: 'Asia/Urumqi GMT+06',
  },
  {
    timezoneId: 'Asia/Ust-Nera',
    timezoneDisplay: 'Asia/Ust-Nera GMT+10',
  },
  {
    timezoneId: 'Asia/Vientiane',
    timezoneDisplay: 'Asia/Vientiane GMT+07',
  },
  {
    timezoneId: 'Asia/Vladivostok',
    timezoneDisplay: 'Asia/Vladivostok GMT+10',
  },
  {
    timezoneId: 'Asia/Yakutsk',
    timezoneDisplay: 'Asia/Yakutsk GMT+09',
  },
  {
    timezoneId: 'Asia/Yangon',
    timezoneDisplay: 'Asia/Yangon GMT+06:30',
  },
  {
    timezoneId: 'Asia/Yekaterinburg',
    timezoneDisplay: 'Asia/Yekaterinburg GMT+05',
  },
  {
    timezoneId: 'Asia/Yerevan',
    timezoneDisplay: 'Asia/Yerevan GMT+04',
  },
  {
    timezoneId: 'Atlantic/Azores',
    timezoneDisplay: 'Atlantic/Azores GMT-01',
  },
  {
    timezoneId: 'Atlantic/Bermuda',
    timezoneDisplay: 'Atlantic/Bermuda GMT-04',
  },
  {
    timezoneId: 'Atlantic/Canary',
    timezoneDisplay: 'Atlantic/Canary GMT+00',
  },
  {
    timezoneId: 'Atlantic/Cape_Verde',
    timezoneDisplay: 'Atlantic/Cape_Verde GMT-01',
  },
  {
    timezoneId: 'Atlantic/Faeroe',
    timezoneDisplay: 'Atlantic/Faeroe GMT+00',
  },
  {
    timezoneId: 'Atlantic/Faroe',
    timezoneDisplay: 'Atlantic/Faroe GMT+00',
  },
  {
    timezoneId: 'Atlantic/Jan_Mayen',
    timezoneDisplay: 'Atlantic/Jan_Mayen GMT+01',
  },
  {
    timezoneId: 'Atlantic/Madeira',
    timezoneDisplay: 'Atlantic/Madeira GMT+00',
  },
  {
    timezoneId: 'Atlantic/Reykjavik',
    timezoneDisplay: 'Atlantic/Reykjavik GMT+00',
  },
  {
    timezoneId: 'Atlantic/South_Georgia',
    timezoneDisplay: 'Atlantic/South_Georgia GMT-02',
  },
  {
    timezoneId: 'Atlantic/St_Helena',
    timezoneDisplay: 'Atlantic/St_Helena GMT+00',
  },
  {
    timezoneId: 'Atlantic/Stanley',
    timezoneDisplay: 'Atlantic/Stanley GMT-03',
  },
  {
    timezoneId: 'Australia/ACT',
    timezoneDisplay: 'Australia/ACT GMT+11',
  },
  {
    timezoneId: 'Australia/Adelaide',
    timezoneDisplay: 'Australia/Adelaide GMT+10:30',
  },
  {
    timezoneId: 'Australia/Brisbane',
    timezoneDisplay: 'Australia/Brisbane GMT+10',
  },
  {
    timezoneId: 'Australia/Broken_Hill',
    timezoneDisplay: 'Australia/Broken_Hill GMT+10:30',
  },
  {
    timezoneId: 'Australia/Canberra',
    timezoneDisplay: 'Australia/Canberra GMT+11',
  },
  {
    timezoneId: 'Australia/Currie',
    timezoneDisplay: 'Australia/Currie GMT+11',
  },
  {
    timezoneId: 'Australia/Darwin',
    timezoneDisplay: 'Australia/Darwin GMT+09:30',
  },
  {
    timezoneId: 'Australia/Eucla',
    timezoneDisplay: 'Australia/Eucla GMT+08:45',
  },
  {
    timezoneId: 'Australia/Hobart',
    timezoneDisplay: 'Australia/Hobart GMT+11',
  },
  {
    timezoneId: 'Australia/LHI',
    timezoneDisplay: 'Australia/LHI GMT+11',
  },
  {
    timezoneId: 'Australia/Lindeman',
    timezoneDisplay: 'Australia/Lindeman GMT+10',
  },
  {
    timezoneId: 'Australia/Lord_Howe',
    timezoneDisplay: 'Australia/Lord_Howe GMT+11',
  },
  {
    timezoneId: 'Australia/Melbourne',
    timezoneDisplay: 'Australia/Melbourne GMT+11',
  },
  {
    timezoneId: 'Australia/NSW',
    timezoneDisplay: 'Australia/NSW GMT+11',
  },
  {
    timezoneId: 'Australia/North',
    timezoneDisplay: 'Australia/North GMT+09:30',
  },
  {
    timezoneId: 'Australia/Perth',
    timezoneDisplay: 'Australia/Perth GMT+08',
  },
  {
    timezoneId: 'Australia/Queensland',
    timezoneDisplay: 'Australia/Queensland GMT+10',
  },
  {
    timezoneId: 'Australia/South',
    timezoneDisplay: 'Australia/South GMT+10:30',
  },
  {
    timezoneId: 'Australia/Sydney',
    timezoneDisplay: 'Australia/Sydney GMT+11',
  },
  {
    timezoneId: 'Australia/Tasmania',
    timezoneDisplay: 'Australia/Tasmania GMT+11',
  },
  {
    timezoneId: 'Australia/Victoria',
    timezoneDisplay: 'Australia/Victoria GMT+11',
  },
  {
    timezoneId: 'Australia/West',
    timezoneDisplay: 'Australia/West GMT+08',
  },
  {
    timezoneId: 'Australia/Yancowinna',
    timezoneDisplay: 'Australia/Yancowinna GMT+10:30',
  },
  {
    timezoneId: 'Brazil/Acre',
    timezoneDisplay: 'Brazil/Acre GMT-05',
  },
  {
    timezoneId: 'Brazil/DeNoronha',
    timezoneDisplay: 'Brazil/DeNoronha GMT-02',
  },
  {
    timezoneId: 'Brazil/East',
    timezoneDisplay: 'Brazil/East GMT-03',
  },
  {
    timezoneId: 'Brazil/West',
    timezoneDisplay: 'Brazil/West GMT-04',
  },
  {
    timezoneId: 'CET',
    timezoneDisplay: 'CET GMT+01',
  },
  {
    timezoneId: 'CST6CDT',
    timezoneDisplay: 'CST6CDT GMT-06',
  },
  {
    timezoneId: 'Canada/Atlantic',
    timezoneDisplay: 'Canada/Atlantic GMT-04',
  },
  {
    timezoneId: 'Canada/Central',
    timezoneDisplay: 'Canada/Central GMT-06',
  },
  {
    timezoneId: 'Canada/Eastern',
    timezoneDisplay: 'Canada/Eastern GMT-05',
  },
  {
    timezoneId: 'Canada/Mountain',
    timezoneDisplay: 'Canada/Mountain GMT-07',
  },
  {
    timezoneId: 'Canada/Newfoundland',
    timezoneDisplay: 'Canada/Newfoundland GMT-03:30',
  },
  {
    timezoneId: 'Canada/Pacific',
    timezoneDisplay: 'Canada/Pacific GMT-08',
  },
  {
    timezoneId: 'Canada/Saskatchewan',
    timezoneDisplay: 'Canada/Saskatchewan GMT-06',
  },
  {
    timezoneId: 'Canada/Yukon',
    timezoneDisplay: 'Canada/Yukon GMT-07',
  },
  {
    timezoneId: 'Chile/Continental',
    timezoneDisplay: 'Chile/Continental GMT-03',
  },
  {
    timezoneId: 'Chile/EasterIsland',
    timezoneDisplay: 'Chile/EasterIsland GMT-05',
  },
  {
    timezoneId: 'Cuba',
    timezoneDisplay: 'Cuba GMT-05',
  },
  {
    timezoneId: 'EET',
    timezoneDisplay: 'EET GMT+02',
  },
  {
    timezoneId: 'EST',
    timezoneDisplay: 'EST GMT-05',
  },
  {
    timezoneId: 'EST5EDT',
    timezoneDisplay: 'EST5EDT GMT-05',
  },
  {
    timezoneId: 'Egypt',
    timezoneDisplay: 'Egypt GMT+02',
  },
  {
    timezoneId: 'Eire',
    timezoneDisplay: 'Eire GMT+00',
  },
  {
    timezoneId: 'Etc/GMT',
    timezoneDisplay: 'Etc/GMT GMT+00',
  },
  {
    timezoneId: 'Etc/GMT+0',
    timezoneDisplay: 'Etc/GMT+0 GMT+00',
  },
  {
    timezoneId: 'Etc/GMT+1',
    timezoneDisplay: 'Etc/GMT+1 GMT-01',
  },
  {
    timezoneId: 'Etc/GMT+10',
    timezoneDisplay: 'Etc/GMT+10 GMT-10',
  },
  {
    timezoneId: 'Etc/GMT+11',
    timezoneDisplay: 'Etc/GMT+11 GMT-11',
  },
  {
    timezoneId: 'Etc/GMT+12',
    timezoneDisplay: 'Etc/GMT+12 GMT-12',
  },
  {
    timezoneId: 'Etc/GMT+2',
    timezoneDisplay: 'Etc/GMT+2 GMT-02',
  },
  {
    timezoneId: 'Etc/GMT+3',
    timezoneDisplay: 'Etc/GMT+3 GMT-03',
  },
  {
    timezoneId: 'Etc/GMT+4',
    timezoneDisplay: 'Etc/GMT+4 GMT-04',
  },
  {
    timezoneId: 'Etc/GMT+5',
    timezoneDisplay: 'Etc/GMT+5 GMT-05',
  },
  {
    timezoneId: 'Etc/GMT+6',
    timezoneDisplay: 'Etc/GMT+6 GMT-06',
  },
  {
    timezoneId: 'Etc/GMT+7',
    timezoneDisplay: 'Etc/GMT+7 GMT-07',
  },
  {
    timezoneId: 'Etc/GMT+8',
    timezoneDisplay: 'Etc/GMT+8 GMT-08',
  },
  {
    timezoneId: 'Etc/GMT+9',
    timezoneDisplay: 'Etc/GMT+9 GMT-09',
  },
  {
    timezoneId: 'Etc/GMT-0',
    timezoneDisplay: 'Etc/GMT-0 GMT+00',
  },
  {
    timezoneId: 'Etc/GMT-1',
    timezoneDisplay: 'Etc/GMT-1 GMT+01',
  },
  {
    timezoneId: 'Etc/GMT-10',
    timezoneDisplay: 'Etc/GMT-10 GMT+10',
  },
  {
    timezoneId: 'Etc/GMT-11',
    timezoneDisplay: 'Etc/GMT-11 GMT+11',
  },
  {
    timezoneId: 'Etc/GMT-12',
    timezoneDisplay: 'Etc/GMT-12 GMT+12',
  },
  {
    timezoneId: 'Etc/GMT-13',
    timezoneDisplay: 'Etc/GMT-13 GMT+13',
  },
  {
    timezoneId: 'Etc/GMT-14',
    timezoneDisplay: 'Etc/GMT-14 GMT+14',
  },
  {
    timezoneId: 'Etc/GMT-2',
    timezoneDisplay: 'Etc/GMT-2 GMT+02',
  },
  {
    timezoneId: 'Etc/GMT-3',
    timezoneDisplay: 'Etc/GMT-3 GMT+03',
  },
  {
    timezoneId: 'Etc/GMT-4',
    timezoneDisplay: 'Etc/GMT-4 GMT+04',
  },
  {
    timezoneId: 'Etc/GMT-5',
    timezoneDisplay: 'Etc/GMT-5 GMT+05',
  },
  {
    timezoneId: 'Etc/GMT-6',
    timezoneDisplay: 'Etc/GMT-6 GMT+06',
  },
  {
    timezoneId: 'Etc/GMT-7',
    timezoneDisplay: 'Etc/GMT-7 GMT+07',
  },
  {
    timezoneId: 'Etc/GMT-8',
    timezoneDisplay: 'Etc/GMT-8 GMT+08',
  },
  {
    timezoneId: 'Etc/GMT-9',
    timezoneDisplay: 'Etc/GMT-9 GMT+09',
  },
  {
    timezoneId: 'Etc/GMT0',
    timezoneDisplay: 'Etc/GMT0 GMT+00',
  },
  {
    timezoneId: 'Etc/Greenwich',
    timezoneDisplay: 'Etc/Greenwich GMT+00',
  },
  {
    timezoneId: 'Etc/UCT',
    timezoneDisplay: 'Etc/UCT GMT+00',
  },
  {
    timezoneId: 'Etc/UTC',
    timezoneDisplay: 'Etc/UTC GMT+00',
  },
  {
    timezoneId: 'Etc/Universal',
    timezoneDisplay: 'Etc/Universal GMT+00',
  },
  {
    timezoneId: 'Etc/Zulu',
    timezoneDisplay: 'Etc/Zulu GMT+00',
  },
  {
    timezoneId: 'Europe/Amsterdam',
    timezoneDisplay: 'Europe/Amsterdam GMT+01',
  },
  {
    timezoneId: 'Europe/Andorra',
    timezoneDisplay: 'Europe/Andorra GMT+01',
  },
  {
    timezoneId: 'Europe/Astrakhan',
    timezoneDisplay: 'Europe/Astrakhan GMT+04',
  },
  {
    timezoneId: 'Europe/Athens',
    timezoneDisplay: 'Europe/Athens GMT+02',
  },
  {
    timezoneId: 'Europe/Belfast',
    timezoneDisplay: 'Europe/Belfast GMT+00',
  },
  {
    timezoneId: 'Europe/Belgrade',
    timezoneDisplay: 'Europe/Belgrade GMT+01',
  },
  {
    timezoneId: 'Europe/Berlin',
    timezoneDisplay: 'Europe/Berlin GMT+01',
  },
  {
    timezoneId: 'Europe/Bratislava',
    timezoneDisplay: 'Europe/Bratislava GMT+01',
  },
  {
    timezoneId: 'Europe/Brussels',
    timezoneDisplay: 'Europe/Brussels GMT+01',
  },
  {
    timezoneId: 'Europe/Bucharest',
    timezoneDisplay: 'Europe/Bucharest GMT+02',
  },
  {
    timezoneId: 'Europe/Budapest',
    timezoneDisplay: 'Europe/Budapest GMT+01',
  },
  {
    timezoneId: 'Europe/Busingen',
    timezoneDisplay: 'Europe/Busingen GMT+01',
  },
  {
    timezoneId: 'Europe/Chisinau',
    timezoneDisplay: 'Europe/Chisinau GMT+02',
  },
  {
    timezoneId: 'Europe/Copenhagen',
    timezoneDisplay: 'Europe/Copenhagen GMT+01',
  },
  {
    timezoneId: 'Europe/Dublin',
    timezoneDisplay: 'Europe/Dublin GMT+00',
  },
  {
    timezoneId: 'Europe/Gibraltar',
    timezoneDisplay: 'Europe/Gibraltar GMT+01',
  },
  {
    timezoneId: 'Europe/Guernsey',
    timezoneDisplay: 'Europe/Guernsey GMT+00',
  },
  {
    timezoneId: 'Europe/Helsinki',
    timezoneDisplay: 'Europe/Helsinki GMT+02',
  },
  {
    timezoneId: 'Europe/Isle_of_Man',
    timezoneDisplay: 'Europe/Isle_of_Man GMT+00',
  },
  {
    timezoneId: 'Europe/Istanbul',
    timezoneDisplay: 'Europe/Istanbul GMT+03',
  },
  {
    timezoneId: 'Europe/Jersey',
    timezoneDisplay: 'Europe/Jersey GMT+00',
  },
  {
    timezoneId: 'Europe/Kaliningrad',
    timezoneDisplay: 'Europe/Kaliningrad GMT+02',
  },
  {
    timezoneId: 'Europe/Kiev',
    timezoneDisplay: 'Europe/Kiev GMT+02',
  },
  {
    timezoneId: 'Europe/Kirov',
    timezoneDisplay: 'Europe/Kirov GMT+03',
  },
  {
    timezoneId: 'Europe/Lisbon',
    timezoneDisplay: 'Europe/Lisbon GMT+00',
  },
  {
    timezoneId: 'Europe/Ljubljana',
    timezoneDisplay: 'Europe/Ljubljana GMT+01',
  },
  {
    timezoneId: 'Europe/London',
    timezoneDisplay: 'Europe/London GMT+00',
  },
  {
    timezoneId: 'Europe/Luxembourg',
    timezoneDisplay: 'Europe/Luxembourg GMT+01',
  },
  {
    timezoneId: 'Europe/Madrid',
    timezoneDisplay: 'Europe/Madrid GMT+01',
  },
  {
    timezoneId: 'Europe/Malta',
    timezoneDisplay: 'Europe/Malta GMT+01',
  },
  {
    timezoneId: 'Europe/Mariehamn',
    timezoneDisplay: 'Europe/Mariehamn GMT+02',
  },
  {
    timezoneId: 'Europe/Minsk',
    timezoneDisplay: 'Europe/Minsk GMT+03',
  },
  {
    timezoneId: 'Europe/Monaco',
    timezoneDisplay: 'Europe/Monaco GMT+01',
  },
  {
    timezoneId: 'Europe/Moscow',
    timezoneDisplay: 'Europe/Moscow GMT+03',
  },
  {
    timezoneId: 'Europe/Nicosia',
    timezoneDisplay: 'Europe/Nicosia GMT+02',
  },
  {
    timezoneId: 'Europe/Oslo',
    timezoneDisplay: 'Europe/Oslo GMT+01',
  },
  {
    timezoneId: 'Europe/Paris',
    timezoneDisplay: 'Europe/Paris GMT+01',
  },
  {
    timezoneId: 'Europe/Podgorica',
    timezoneDisplay: 'Europe/Podgorica GMT+01',
  },
  {
    timezoneId: 'Europe/Prague',
    timezoneDisplay: 'Europe/Prague GMT+01',
  },
  {
    timezoneId: 'Europe/Riga',
    timezoneDisplay: 'Europe/Riga GMT+02',
  },
  {
    timezoneId: 'Europe/Rome',
    timezoneDisplay: 'Europe/Rome GMT+01',
  },
  {
    timezoneId: 'Europe/Samara',
    timezoneDisplay: 'Europe/Samara GMT+04',
  },
  {
    timezoneId: 'Europe/San_Marino',
    timezoneDisplay: 'Europe/San_Marino GMT+01',
  },
  {
    timezoneId: 'Europe/Sarajevo',
    timezoneDisplay: 'Europe/Sarajevo GMT+01',
  },
  {
    timezoneId: 'Europe/Saratov',
    timezoneDisplay: 'Europe/Saratov GMT+04',
  },
  {
    timezoneId: 'Europe/Simferopol',
    timezoneDisplay: 'Europe/Simferopol GMT+03',
  },
  {
    timezoneId: 'Europe/Skopje',
    timezoneDisplay: 'Europe/Skopje GMT+01',
  },
  {
    timezoneId: 'Europe/Sofia',
    timezoneDisplay: 'Europe/Sofia GMT+02',
  },
  {
    timezoneId: 'Europe/Stockholm',
    timezoneDisplay: 'Europe/Stockholm GMT+01',
  },
  {
    timezoneId: 'Europe/Tallinn',
    timezoneDisplay: 'Europe/Tallinn GMT+02',
  },
  {
    timezoneId: 'Europe/Tirane',
    timezoneDisplay: 'Europe/Tirane GMT+01',
  },
  {
    timezoneId: 'Europe/Tiraspol',
    timezoneDisplay: 'Europe/Tiraspol GMT+02',
  },
  {
    timezoneId: 'Europe/Ulyanovsk',
    timezoneDisplay: 'Europe/Ulyanovsk GMT+04',
  },
  {
    timezoneId: 'Europe/Uzhgorod',
    timezoneDisplay: 'Europe/Uzhgorod GMT+02',
  },
  {
    timezoneId: 'Europe/Vaduz',
    timezoneDisplay: 'Europe/Vaduz GMT+01',
  },
  {
    timezoneId: 'Europe/Vatican',
    timezoneDisplay: 'Europe/Vatican GMT+01',
  },
  {
    timezoneId: 'Europe/Vienna',
    timezoneDisplay: 'Europe/Vienna GMT+01',
  },
  {
    timezoneId: 'Europe/Vilnius',
    timezoneDisplay: 'Europe/Vilnius GMT+02',
  },
  {
    timezoneId: 'Europe/Volgograd',
    timezoneDisplay: 'Europe/Volgograd GMT+03',
  },
  {
    timezoneId: 'Europe/Warsaw',
    timezoneDisplay: 'Europe/Warsaw GMT+01',
  },
  {
    timezoneId: 'Europe/Zagreb',
    timezoneDisplay: 'Europe/Zagreb GMT+01',
  },
  {
    timezoneId: 'Europe/Zaporozhye',
    timezoneDisplay: 'Europe/Zaporozhye GMT+02',
  },
  {
    timezoneId: 'Europe/Zurich',
    timezoneDisplay: 'Europe/Zurich GMT+01',
  },
  {
    timezoneId: 'GB',
    timezoneDisplay: 'GB GMT+00',
  },
  {
    timezoneId: 'GB-Eire',
    timezoneDisplay: 'GB-Eire GMT+00',
  },
  {
    timezoneId: 'GMT',
    timezoneDisplay: 'GMT GMT+00',
  },
  {
    timezoneId: 'GMT+0',
    timezoneDisplay: 'GMT+0 GMT+00',
  },
  {
    timezoneId: 'GMT-0',
    timezoneDisplay: 'GMT-0 GMT+00',
  },
  {
    timezoneId: 'GMT0',
    timezoneDisplay: 'GMT0 GMT+00',
  },
  {
    timezoneId: 'Greenwich',
    timezoneDisplay: 'Greenwich GMT+00',
  },
  {
    timezoneId: 'HST',
    timezoneDisplay: 'HST GMT-10',
  },
  {
    timezoneId: 'Hongkong',
    timezoneDisplay: 'Hongkong GMT+08',
  },
  {
    timezoneId: 'Iceland',
    timezoneDisplay: 'Iceland GMT+00',
  },
  {
    timezoneId: 'Indian/Antananarivo',
    timezoneDisplay: 'Indian/Antananarivo GMT+03',
  },
  {
    timezoneId: 'Indian/Chagos',
    timezoneDisplay: 'Indian/Chagos GMT+06',
  },
  {
    timezoneId: 'Indian/Christmas',
    timezoneDisplay: 'Indian/Christmas GMT+07',
  },
  {
    timezoneId: 'Indian/Cocos',
    timezoneDisplay: 'Indian/Cocos GMT+06:30',
  },
  {
    timezoneId: 'Indian/Comoro',
    timezoneDisplay: 'Indian/Comoro GMT+03',
  },
  {
    timezoneId: 'Indian/Kerguelen',
    timezoneDisplay: 'Indian/Kerguelen GMT+05',
  },
  {
    timezoneId: 'Indian/Mahe',
    timezoneDisplay: 'Indian/Mahe GMT+04',
  },
  {
    timezoneId: 'Indian/Maldives',
    timezoneDisplay: 'Indian/Maldives GMT+05',
  },
  {
    timezoneId: 'Indian/Mauritius',
    timezoneDisplay: 'Indian/Mauritius GMT+04',
  },
  {
    timezoneId: 'Indian/Mayotte',
    timezoneDisplay: 'Indian/Mayotte GMT+03',
  },
  {
    timezoneId: 'Indian/Reunion',
    timezoneDisplay: 'Indian/Reunion GMT+04',
  },
  {
    timezoneId: 'Iran',
    timezoneDisplay: 'Iran GMT+03:30',
  },
  {
    timezoneId: 'Israel',
    timezoneDisplay: 'Israel GMT+02',
  },
  {
    timezoneId: 'Jamaica',
    timezoneDisplay: 'Jamaica GMT-05',
  },
  {
    timezoneId: 'Japan',
    timezoneDisplay: 'Japan GMT+09',
  },
  {
    timezoneId: 'Kwajalein',
    timezoneDisplay: 'Kwajalein GMT+12',
  },
  {
    timezoneId: 'Libya',
    timezoneDisplay: 'Libya GMT+02',
  },
  {
    timezoneId: 'MET',
    timezoneDisplay: 'MET GMT+01',
  },
  {
    timezoneId: 'MST',
    timezoneDisplay: 'MST GMT-07',
  },
  {
    timezoneId: 'MST7MDT',
    timezoneDisplay: 'MST7MDT GMT-07',
  },
  {
    timezoneId: 'Mexico/BajaNorte',
    timezoneDisplay: 'Mexico/BajaNorte GMT-08',
  },
  {
    timezoneId: 'Mexico/BajaSur',
    timezoneDisplay: 'Mexico/BajaSur GMT-07',
  },
  {
    timezoneId: 'Mexico/General',
    timezoneDisplay: 'Mexico/General GMT-06',
  },
  {
    timezoneId: 'NZ',
    timezoneDisplay: 'NZ GMT+13',
  },
  {
    timezoneId: 'NZ-CHAT',
    timezoneDisplay: 'NZ-CHAT GMT+13:45',
  },
  {
    timezoneId: 'Navajo',
    timezoneDisplay: 'Navajo GMT-07',
  },
  {
    timezoneId: 'PRC',
    timezoneDisplay: 'PRC GMT+08',
  },
  {
    timezoneId: 'PST8PDT',
    timezoneDisplay: 'PST8PDT GMT-08',
  },
  {
    timezoneId: 'Pacific/Apia',
    timezoneDisplay: 'Pacific/Apia GMT+13',
  },
  {
    timezoneId: 'Pacific/Auckland',
    timezoneDisplay: 'Pacific/Auckland GMT+13',
  },
  {
    timezoneId: 'Pacific/Bougainville',
    timezoneDisplay: 'Pacific/Bougainville GMT+11',
  },
  {
    timezoneId: 'Pacific/Chatham',
    timezoneDisplay: 'Pacific/Chatham GMT+13:45',
  },
  {
    timezoneId: 'Pacific/Chuuk',
    timezoneDisplay: 'Pacific/Chuuk GMT+10',
  },
  {
    timezoneId: 'Pacific/Easter',
    timezoneDisplay: 'Pacific/Easter GMT-05',
  },
  {
    timezoneId: 'Pacific/Efate',
    timezoneDisplay: 'Pacific/Efate GMT+11',
  },
  {
    timezoneId: 'Pacific/Enderbury',
    timezoneDisplay: 'Pacific/Enderbury GMT+13',
  },
  {
    timezoneId: 'Pacific/Fakaofo',
    timezoneDisplay: 'Pacific/Fakaofo GMT+13',
  },
  {
    timezoneId: 'Pacific/Fiji',
    timezoneDisplay: 'Pacific/Fiji GMT+12',
  },
  {
    timezoneId: 'Pacific/Funafuti',
    timezoneDisplay: 'Pacific/Funafuti GMT+12',
  },
  {
    timezoneId: 'Pacific/Galapagos',
    timezoneDisplay: 'Pacific/Galapagos GMT-06',
  },
  {
    timezoneId: 'Pacific/Gambier',
    timezoneDisplay: 'Pacific/Gambier GMT-09',
  },
  {
    timezoneId: 'Pacific/Guadalcanal',
    timezoneDisplay: 'Pacific/Guadalcanal GMT+11',
  },
  {
    timezoneId: 'Pacific/Guam',
    timezoneDisplay: 'Pacific/Guam GMT+10',
  },
  {
    timezoneId: 'Pacific/Honolulu',
    timezoneDisplay: 'Pacific/Honolulu GMT-10',
  },
  {
    timezoneId: 'Pacific/Johnston',
    timezoneDisplay: 'Pacific/Johnston GMT-10',
  },
  {
    timezoneId: 'Pacific/Kanton',
    timezoneDisplay: 'Pacific/Kanton GMT+13',
  },
  {
    timezoneId: 'Pacific/Kiritimati',
    timezoneDisplay: 'Pacific/Kiritimati GMT+14',
  },
  {
    timezoneId: 'Pacific/Kosrae',
    timezoneDisplay: 'Pacific/Kosrae GMT+11',
  },
  {
    timezoneId: 'Pacific/Kwajalein',
    timezoneDisplay: 'Pacific/Kwajalein GMT+12',
  },
  {
    timezoneId: 'Pacific/Majuro',
    timezoneDisplay: 'Pacific/Majuro GMT+12',
  },
  {
    timezoneId: 'Pacific/Marquesas',
    timezoneDisplay: 'Pacific/Marquesas GMT-09:30',
  },
  {
    timezoneId: 'Pacific/Midway',
    timezoneDisplay: 'Pacific/Midway GMT-11',
  },
  {
    timezoneId: 'Pacific/Nauru',
    timezoneDisplay: 'Pacific/Nauru GMT+12',
  },
  {
    timezoneId: 'Pacific/Niue',
    timezoneDisplay: 'Pacific/Niue GMT-11',
  },
  {
    timezoneId: 'Pacific/Norfolk',
    timezoneDisplay: 'Pacific/Norfolk GMT+12',
  },
  {
    timezoneId: 'Pacific/Noumea',
    timezoneDisplay: 'Pacific/Noumea GMT+11',
  },
  {
    timezoneId: 'Pacific/Pago_Pago',
    timezoneDisplay: 'Pacific/Pago_Pago GMT-11',
  },
  {
    timezoneId: 'Pacific/Palau',
    timezoneDisplay: 'Pacific/Palau GMT+09',
  },
  {
    timezoneId: 'Pacific/Pitcairn',
    timezoneDisplay: 'Pacific/Pitcairn GMT-08',
  },
  {
    timezoneId: 'Pacific/Pohnpei',
    timezoneDisplay: 'Pacific/Pohnpei GMT+11',
  },
  {
    timezoneId: 'Pacific/Ponape',
    timezoneDisplay: 'Pacific/Ponape GMT+11',
  },
  {
    timezoneId: 'Pacific/Port_Moresby',
    timezoneDisplay: 'Pacific/Port_Moresby GMT+10',
  },
  {
    timezoneId: 'Pacific/Rarotonga',
    timezoneDisplay: 'Pacific/Rarotonga GMT-10',
  },
  {
    timezoneId: 'Pacific/Saipan',
    timezoneDisplay: 'Pacific/Saipan GMT+10',
  },
  {
    timezoneId: 'Pacific/Samoa',
    timezoneDisplay: 'Pacific/Samoa GMT-11',
  },
  {
    timezoneId: 'Pacific/Tahiti',
    timezoneDisplay: 'Pacific/Tahiti GMT-10',
  },
  {
    timezoneId: 'Pacific/Tarawa',
    timezoneDisplay: 'Pacific/Tarawa GMT+12',
  },
  {
    timezoneId: 'Pacific/Tongatapu',
    timezoneDisplay: 'Pacific/Tongatapu GMT+13',
  },
  {
    timezoneId: 'Pacific/Truk',
    timezoneDisplay: 'Pacific/Truk GMT+10',
  },
  {
    timezoneId: 'Pacific/Wake',
    timezoneDisplay: 'Pacific/Wake GMT+12',
  },
  {
    timezoneId: 'Pacific/Wallis',
    timezoneDisplay: 'Pacific/Wallis GMT+12',
  },
  {
    timezoneId: 'Pacific/Yap',
    timezoneDisplay: 'Pacific/Yap GMT+10',
  },
  {
    timezoneId: 'Poland',
    timezoneDisplay: 'Poland GMT+01',
  },
  {
    timezoneId: 'Portugal',
    timezoneDisplay: 'Portugal GMT+00',
  },
  {
    timezoneId: 'ROC',
    timezoneDisplay: 'ROC GMT+08',
  },
  {
    timezoneId: 'ROK',
    timezoneDisplay: 'ROK GMT+09',
  },
  {
    timezoneId: 'Singapore',
    timezoneDisplay: 'Singapore GMT+08',
  },
  {
    timezoneId: 'Turkey',
    timezoneDisplay: 'Turkey GMT+03',
  },
  {
    timezoneId: 'UCT',
    timezoneDisplay: 'UCT GMT+00',
  },
  {
    timezoneId: 'US/Alaska',
    timezoneDisplay: 'US/Alaska GMT-09',
  },
  {
    timezoneId: 'US/Aleutian',
    timezoneDisplay: 'US/Aleutian GMT-10',
  },
  {
    timezoneId: 'US/Arizona',
    timezoneDisplay: 'US/Arizona GMT-07',
  },
  {
    timezoneId: 'US/Central',
    timezoneDisplay: 'US/Central GMT-06',
  },
  {
    timezoneId: 'US/East-Indiana',
    timezoneDisplay: 'US/East-Indiana GMT-05',
  },
  {
    timezoneId: 'US/Eastern',
    timezoneDisplay: 'US/Eastern GMT-05',
  },
  {
    timezoneId: 'US/Hawaii',
    timezoneDisplay: 'US/Hawaii GMT-10',
  },
  {
    timezoneId: 'US/Indiana-Starke',
    timezoneDisplay: 'US/Indiana-Starke GMT-06',
  },
  {
    timezoneId: 'US/Michigan',
    timezoneDisplay: 'US/Michigan GMT-05',
  },
  {
    timezoneId: 'US/Mountain',
    timezoneDisplay: 'US/Mountain GMT-07',
  },
  {
    timezoneId: 'US/Pacific',
    timezoneDisplay: 'US/Pacific GMT-08',
  },
  {
    timezoneId: 'US/Samoa',
    timezoneDisplay: 'US/Samoa GMT-11',
  },
  {
    timezoneId: 'UTC',
    timezoneDisplay: 'UTC GMT+00',
  },
  {
    timezoneId: 'Universal',
    timezoneDisplay: 'Universal GMT+00',
  },
  {
    timezoneId: 'W-SU',
    timezoneDisplay: 'W-SU GMT+03',
  },
  {
    timezoneId: 'WET',
    timezoneDisplay: 'WET GMT+00',
  },
  {
    timezoneId: 'Zulu',
    timezoneDisplay: 'Zulu GMT+00',
  },
];

export default {
  title: 'Core/Components/Form/InputSelect/InputSelectSearchVirtualized',
  component: InputSelectSearchVirtualized,
  argTypes: {
    placeholder: {
      control: 'text',
    },
    errors: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      options: ['md', 'lg'],
    },
    label: {
      control: 'text',
    },
    width: {
      control: 'number',
    },
  },
};
interface ValueVirtualizedSchema {
  timezoneId: string;
  timezoneDisplay: string;
}

export const InputSelectVirtualizedExample: Story<InputSelectSearchVirtualizedProps<ValueVirtualizedSchema>> = ({
  placeholder,
  disabled,
  size,
  label,
  errors,
  width,
  maxHeight,
}) => {
  const [selected, setSelected] = React.useState<ValueVirtualizedSchema | null>(null);
  const [items] = React.useState(timezone);
  return (
    <InputSelectSearchVirtualized
      label={label}
      size={size}
      selectedItem={selected}
      placeholder={placeholder}
      disabled={disabled}
      errors={errors}
      itemToString={item => (item ? `${item.timezoneDisplay}` : '')}
      itemValue={item => item?.timezoneId ?? ''}
      handleSelectedItemChange={({ selectedItem }) => {
        if (selectedItem) {
          setSelected(selectedItem);
        }
      }}
      items={items}
      width={width}
      maxHeight={maxHeight}
    />
  );
};
InputSelectVirtualizedExample.args = {
  placeholder: 'Select...',
  size: 'md',
  disabled: false,
  label: 'Label input',
  errors: false,
  width: '100%',
  maxHeight: '250px',
};
