<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateControlpermisosTable extends Migration
{
    public function up()
    {
        Schema::create('controlpermisos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("id_permiso")->nullable();
            $table->string

("id_user")->nullable();
            $table->date

("fecha_solicitud")->nullable();
            $table->date

("fecha_dia_libre")->nullable();
            $table->enum
("estado", ["Pendiente","Aprobado","Rechazado"],)->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('controlpermisos');
    }
}

