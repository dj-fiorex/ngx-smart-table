"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[718],{4718:(Z,r,o)=>{o.r(r),o.d(r,{MigrationModule:()=>g});var d=o(6814),s=o(7738),l=o(9186),e=o(6689),c=o(8595);const u=function(){return["/documentation"]},h=[{path:"",component:(()=>{var t;class n{}return(t=n).\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["migration"]],decls:168,vars:4,consts:[["tagline","Coming from ng2-smart-table"],[1,"main-content"],["target","_blank","href","https://github.com/dj-fiorex/angular2-smart-table/issues"],[3,"routerLink"],["href","https://github.com/akveo/nebular/blob/master/src/framework/theme/styles/global/tables/_smart-table.theme.scss","target","_blank"],[1,"highlight"]],template:function(a,U){1&a&&(e._UZ(0,"header-component",0),e.TgZ(1,"section",1)(2,"h2"),e._uU(3,"Migration Guide"),e.qZA(),e.TgZ(4,"p"),e._uU(5," This document is for people who migrate their project from ng2-smart-table to this fork. It contains information about the most significant changes and gives some advice that help integrating this fork into your project. "),e.qZA(),e.TgZ(6,"p"),e._uU(7," Please consider, that while we are trying to be as compatible as possible, we may have introduced breaking changes. Thus the increase of version number from the latest ng2-smart-table 1.7.2 to 2.x. If you need help for a specific problem, open an "),e.TgZ(8,"a",2),e._uU(9,"Issue"),e.qZA(),e._uU(10," on GitHub and we try to help. "),e.qZA(),e.TgZ(11,"p"),e._uU(12," The recent component documentation including compatibility attributes you can find "),e.TgZ(13,"a",3),e._uU(14,"here"),e.qZA(),e._uU(15,". "),e.qZA(),e.TgZ(16,"h3"),e._uU(17,"Bring Back the Styling"),e.qZA(),e.TgZ(18,"p"),e._uU(19," If you want to stick to the original styling of the smart-table, you can copy the "),e.TgZ(20,"a",4),e._uU(21,"original SCSS file"),e.qZA(),e._uU(22," into your project and replace the "),e.TgZ(23,"code"),e._uU(24,"ng2-"),e.qZA(),e._uU(25," prefix of the selectors with "),e.TgZ(26,"code"),e._uU(27,"angular2-"),e.qZA(),e._uU(28,". There is no guarantee that this results in a perfect replica of the original styling, but it may come a lot more closer. "),e.qZA(),e.TgZ(29,"h3"),e._uU(30,"Setting Keys"),e.qZA(),e._uU(31," This Section describes the changes to the settings object. "),e.TgZ(32,"h4"),e._uU(33,"Deprecated"),e.qZA(),e.TgZ(34,"p"),e._uU(35," The following setting keys have been deprecated in 2.x and removed in 3.0.0: "),e.qZA(),e.TgZ(36,"ul")(37,"li")(38,"code"),e._uU(39,"editable"),e.qZA(),e._uU(40," was renamed to "),e.TgZ(41,"code"),e._uU(42,"isEditable"),e.qZA()(),e.TgZ(43,"li")(44,"code"),e._uU(45,"sort"),e.qZA(),e._uU(46," was renamed to "),e.TgZ(47,"code"),e._uU(48,"isSortable"),e.qZA()(),e.TgZ(49,"li"),e._uU(50,"The possibility to set "),e.TgZ(51,"code"),e._uU(52,"filter"),e.qZA(),e._uU(53," to false was replaced with an "),e.TgZ(54,"code"),e._uU(55,"isFilterable"),e.qZA(),e._uU(56," attribute"),e.qZA(),e.TgZ(57,"li")(58,"code"),e._uU(59,"expandedRowComponent"),e.qZA(),e._uU(60," has been into "),e.TgZ(61,"code"),e._uU(62,"expand"),e.qZA(),e._uU(63," and was renamed to "),e.TgZ(64,"code"),e._uU(65,"component"),e.qZA()(),e.TgZ(66,"li")(67,"code"),e._uU(68,"expandRowButtonContent"),e.qZA(),e._uU(69," was renamed to "),e.TgZ(70,"code"),e._uU(71,"buttonContent"),e.qZA(),e._uU(72," (it is already part of the "),e.TgZ(73,"code"),e._uU(74,"expand"),e.qZA(),e._uU(75," settings group)"),e.qZA(),e.TgZ(76,"li")(77,"code"),e._uU(78,"class"),e.qZA(),e._uU(79," was split into the separate "),e.TgZ(80,"code"),e._uU(81,"classHeader"),e.qZA(),e._uU(82," and "),e.TgZ(83,"code"),e._uU(84,"classContent"),e.qZA(),e._uU(85," settings"),e.qZA()(),e.TgZ(86,"h4"),e._uU(87,"New Settings"),e.qZA(),e.TgZ(88,"p")(89,"code"),e._uU(90,"isAddable"),e.qZA(),e._uU(91," - This flag works like "),e.TgZ(92,"code"),e._uU(93,"isEditable"),e.qZA(),e._uU(94," (formerly "),e.TgZ(95,"code"),e._uU(96,"editable"),e.qZA(),e._uU(97,") but affects the cell in the row that is displayed when adding a new item (inline mode only). The "),e.TgZ(98,"code"),e._uU(99,"isEditable"),e.qZA(),e._uU(100,' flag on the other hand has no effect on the "add" row. This way you can control whether an attribute shall be immutable once it has been added. '),e.qZA(),e.TgZ(101,"p")(102,"code"),e._uU(103,"expand"),e.qZA(),e._uU(104," - With these settings you can enable and configure an additional action button to expand rows into full blown angular components that are displayed next to the expanded row. Read the "),e.TgZ(105,"a",3),e._uU(106,"documentation"),e.qZA(),e._uU(107," for details. "),e.qZA(),e.TgZ(108,"p")(109,"code"),e._uU(110,"editor.config.disableEnterKeySave"),e.qZA(),e._uU(111," - By default, hitting ENTER in text, textarea, or select editor, the row is submitted. This behavior can be disabled via this new setting. "),e.qZA(),e.TgZ(112,"p")(113,"code"),e._uU(114,"hideable"),e.qZA(),e._uU(115," - Controls whether columns can be hidden by the user. "),e.qZA(),e.TgZ(116,"p")(117,"code"),e._uU(118,"resizable"),e.qZA(),e._uU(119," - Controls whether columns can be resized by the user. This is currently experimental and may not work smoothly in all environments. "),e.qZA(),e.TgZ(120,"h3"),e._uU(121,"Changed Behavior"),e.qZA(),e.TgZ(122,"p"),e._uU(123," For some reason, the "),e.TgZ(124,"code"),e._uU(125,"DataSource.setSort()"),e.qZA(),e._uU(126," method allowed the specification of multiple fields. However, support for sorting by multiple columns was never really implemented. Now it is, but to keep the API backwards compatible, "),e.TgZ(127,"code"),e._uU(128,"setSort()"),e.qZA(),e._uU(129," still replaces the entire sort configuration and we introduced a new "),e.TgZ(130,"code"),e._uU(131,"updateSort()"),e.qZA(),e._uU(132," method to adjust sorting parameters. "),e.qZA(),e.TgZ(133,"h3"),e._uU(134,"Fixed Bugs"),e.qZA(),e.TgZ(135,"p"),e._uU(136," The documentation of the method "),e.TgZ(137,"code"),e._uU(138,"DataSource.count()"),e.qZA(),e._uU(139," claimed to return the number of elements in the data source. But actually it only returns the number of filtered elements. For compatibility we only fixed the documentation. "),e.qZA(),e.TgZ(140,"p")(141,"span",5),e._uU(142,"ServerDataSource"),e.qZA(),e._uU(143," - The behavior of the methods "),e.TgZ(144,"code"),e._uU(145,"getFilteredAndSorted()"),e.qZA(),e._uU(146," and "),e.TgZ(147,"code"),e._uU(148,"getAll()"),e.qZA(),e._uU(149," is fixed. Previously, these methods were inherited from "),e.TgZ(150,"code"),e._uU(151,"LocalDataSource"),e.qZA(),e._uU(152," and returned the elements based on the "),e.TgZ(153,"code"),e._uU(154,"data"),e.qZA(),e._uU(155," array within the data source. But in case of the the "),e.TgZ(156,"code"),e._uU(157,"ServerDataSource"),e.qZA(),e._uU(158," this array is already filtered, sorted, and paginated. The new implementation updates the contents of the data source with the correct data by submitting the correct request. That also means, that you now have to be a bit careful when using "),e.TgZ(159,"code"),e._uU(160,"getAll()"),e.qZA(),e._uU(161," with an "),e.TgZ(162,"code"),e._uU(163,"ServerDataSource"),e.qZA(),e._uU(164," if the server stores a lot of data, because now you "),e.TgZ(165,"em"),e._uU(166,"really"),e.qZA(),e._uU(167," get all the data. "),e.qZA()()),2&a&&(e.xp6(13),e.Q6J("routerLink",e.DdM(2,u)),e.xp6(92),e.Q6J("routerLink",e.DdM(3,u)))},dependencies:[s.rH,c.G],encapsulation:2}),n})()}];let g=(()=>{var t;class n{}return(t=n).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,s.Bz.forChild(h),l.m]}),n})()}}]);