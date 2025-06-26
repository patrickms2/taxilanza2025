<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToTable extends Migration
{
    public function up()
    {

        Schema::table('users', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('carpetas', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('citas', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('conductores', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('consultas', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('controlfichaje', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('controlpermisos', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('departamentos', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('documentos', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('estadisticas', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('localizaciontaxis', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('mensajes', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('pagos', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('roles', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('servicios', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('taxis', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('taxistas', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('tipos_doc', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('usuarios', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');

        });

        Schema::table('files', function(Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');
        });
    }

    public function down()
    {
        //
    }
}
