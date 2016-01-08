// Add fuction
jQuery.fn.dlgOpen = function(callback) {
  this.find('.btn').attr('href','javascript:void(0)');
  if (!this.hasClass('dialogBase')) return false;
  this.stop().fadeIn(300);
  if (callback) callback(this);
  return false;}
jQuery.fn.dlgClose = function(callback) {
  if (!this.hasClass('dialogBase')) return false;
  this.stop().fadeOut(300);
  if (callback) callback(this);
  return false;}

// StartUP
$(document).ready(function() {
  var contentHeight = document.body.scrollHeight > window.innerHeight ?
    document.body.scrollHeight + 'px' : '100%';
  /*CSS .dialogBase*/
  $('div.dialogBase').hide();
});

// 1ダイアログを初期化（自動オープンしない）
d.dialog({
  modal: false,
  autoOpen: false
});