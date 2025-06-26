<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMensajesTable extends Migration
{
    public function up()
    {
        Schema::create('mensajes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("id_mensaje")->nullable();
            $table->string

("id_departamento")->nullable();
            $table->string

("id_taxista")->nullable();
            $table->string

("contenido")->nullable();
            $table->timestamp

("fecha_envio")->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('mensajes');
    }
}

