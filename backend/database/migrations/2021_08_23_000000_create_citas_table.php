<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCitasTable extends Migration
{
    public function up()
    {
        Schema::create('citas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("id_cita")->nullable();
            $table->date

("fecha")->nullable();
            $table->string

("hora")->nullable();
            $table->string

("id_departamento")->nullable();
            $table->integer

("lugar")->nullable();
            $table->string

("usuarios")->nullable();
            $table->string

("taxistas")->nullable();
            $table->enum
("estado_cita", ["Pendiente","Confirmada","Cancelada"],)->nullable();
            $table->string

("id_creador")->nullable();
            $table->timestamp

("f_creacion")->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('citas');
    }
}

